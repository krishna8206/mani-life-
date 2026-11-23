import mongoose, { Schema, Document } from 'mongoose';

export interface IAdminUser extends Document {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: 'SUPERADMIN' | 'OPERATIONS' | 'RND_CHEMIST';
}

const AdminUserSchema = new Schema<IAdminUser>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true, default: 'admin@123' },
    role: { type: String, enum: ['SUPERADMIN', 'OPERATIONS', 'RND_CHEMIST'], default: 'SUPERADMIN' },
  },
  {
    timestamps: true,
  }
);

export const AdminUser = mongoose.models.AdminUser || mongoose.model<IAdminUser>('AdminUser', AdminUserSchema);
