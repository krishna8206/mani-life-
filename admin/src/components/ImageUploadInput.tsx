'use client';

import React, { useState, useRef } from 'react';
import { Upload, Check, Loader2, Image as ImageIcon, AlertCircle, ExternalLink } from 'lucide-react';

interface ImageUploadInputProps {
  label?: string;
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  placeholder?: string;
}

export default function ImageUploadInput({
  label = 'Image URL',
  value,
  onChange,
  folder = 'mani-lifestyle',
  placeholder = 'https://res.cloudinary.com/... or /images/...',
}: ImageUploadInputProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset input so the same file can be re-selected if needed
    e.target.value = '';

    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(false);

    try {
      // 1. Read file as Base64 Data URI
      const base64Data = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(file);
      });

      // 2. Upload to backend Cloudinary endpoint
      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64Data, folder }),
      });

      const data = await res.json();

      if (res.ok && data.success && data.url) {
        onChange(data.url);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3500);
      } else {
        throw new Error(data.error || 'Failed to upload image to Cloudinary');
      }
    } catch (err: any) {
      setUploadError(err.message || 'Upload failed. Check Cloudinary settings.');
      setTimeout(() => setUploadError(null), 5000);
    } finally {
      setIsUploading(false);
    }
  };

  const isCloudinaryUrl = value?.includes('cloudinary.com');

  return (
    <div className="space-y-1.5 text-xs">
      <div className="flex items-center justify-between">
        <label className="block text-[11px] font-medium text-slate-400">{label}</label>
        {isCloudinaryUrl && (
          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Cloudinary CDN
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* Preview Thumbnail */}
        <div className="w-9 h-9 rounded-lg bg-[#06131f] border border-[#14334d] flex items-center justify-center shrink-0 overflow-hidden relative group">
          {value ? (
            <img
              src={value}
              alt="Preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback icon on broken image
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : (
            <ImageIcon className="w-4 h-4 text-slate-600" />
          )}
        </div>

        {/* Text Input for URL */}
        <div className="relative flex-1">
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-3 pr-8 py-1.5 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs focus:border-sky-400 focus:outline-hidden font-mono"
          />
          {value && (
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-sky-400 p-0.5 transition-colors"
              title="Open full image in new tab"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Upload Trigger Button */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-all cursor-pointer ${
            uploadSuccess
              ? 'bg-emerald-600 text-white'
              : 'bg-[#164666] hover:bg-[#1e608f] text-white border border-sky-400/30'
          } disabled:opacity-60`}
          title="Upload image directly to Cloudinary CDN"
        >
          {isUploading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-300" />
              <span>Uploading...</span>
            </>
          ) : uploadSuccess ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
              <span>Uploaded!</span>
            </>
          ) : (
            <>
              <Upload className="w-3.5 h-3.5 text-sky-300" />
              <span>Cloud Upload</span>
            </>
          )}
        </button>
      </div>

      {/* Error Message */}
      {uploadError && (
        <div className="flex items-center gap-1.5 text-[11px] text-rose-400 pt-0.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{uploadError}</span>
        </div>
      )}
    </div>
  );
}
