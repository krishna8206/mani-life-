"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  CSSProperties,
} from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
//  TIMING CONSTANTS  (all in ms)
// ─────────────────────────────────────────────────────────────────────────────
const T_SHEEN      = 380;  // specular sheen sweep across logos & handles
const T_SWING      = 700;  // doors start swinging open in 3D
const T_SWING_DUR  = 820;  // door rotateY transition duration
const T_FADE_DELAY = 880;  // delay AFTER isOpening before wrapper opacity fades
const T_FADE_DUR   = 380;  // fade-out duration
const T_DONE       = T_FADE_DELAY + T_FADE_DUR + 80;

// ─────────────────────────────────────────────────────────────────────────────
//  ARCHITECTURAL BALL-TIP HINGE
// ─────────────────────────────────────────────────────────────────────────────
function BallTipHinge({ side }: { side: "left" | "right" }) {
  return (
    <div
      style={{
        position: "absolute",
        [side === "left" ? "left" : "right"]: 7,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      <div style={{ width: 11, height: 11, borderRadius: "50%", background: "radial-gradient(circle at 32% 32%, #f1f5f9 0%, #94a3b8 55%, #475569 100%)", boxShadow: "0 1px 4px rgba(0,0,0,0.4)" }} />
      <div style={{ width: 20, height: 32, background: "linear-gradient(90deg, #64748b 0%, #cbd5e1 40%, #f1f5f9 50%, #cbd5e1 60%, #64748b 100%)", borderRadius: 2, boxShadow: "0 2px 5px rgba(0,0,0,0.32)", border: "1px solid rgba(255,255,255,0.28)" }} />
      <div style={{ width: 14, height: 24, background: "linear-gradient(90deg, #334155 0%, #e2e8f0 45%, #f8fafc 55%, #94a3b8 100%)", borderRadius: 999, boxShadow: "0 2px 7px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.35)" }} />
      <div style={{ width: 20, height: 32, background: "linear-gradient(90deg, #64748b 0%, #cbd5e1 40%, #f1f5f9 50%, #cbd5e1 60%, #64748b 100%)", borderRadius: 2, boxShadow: "0 2px 5px rgba(0,0,0,0.32)", border: "1px solid rgba(255,255,255,0.28)" }} />
      <div style={{ width: 11, height: 11, borderRadius: "50%", background: "radial-gradient(circle at 32% 32%, #f1f5f9 0%, #94a3b8 55%, #475569 100%)", boxShadow: "0 1px 4px rgba(0,0,0,0.4)" }} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  BRUSHED-SILVER PULL HANDLE
// ─────────────────────────────────────────────────────────────────────────────
function PullHandle({ isUnlocked }: { isUnlocked: boolean }) {
  return (
    <div style={{ position: "relative", zIndex: 12, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div
        style={{
          width: "clamp(24px, 2.8vw, 32px)",
          height: "clamp(130px, 18vh, 185px)",
          background: "linear-gradient(180deg, #64748b 0%, #94a3b8 20%, #cbd5e1 50%, #94a3b8 80%, #64748b 100%)",
          borderRadius: 7,
          boxShadow: "2px 6px 18px rgba(0,0,0,0.38)",
          border: "1px solid rgba(255,255,255,0.45)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0",
          position: "relative",
        }}
      >
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1e293b", boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3)" }} />
        <div style={{ width: "80%", height: 12, background: "linear-gradient(90deg, #475569, #e2e8f0, #475569)", borderRadius: 3, boxShadow: "0 1px 4px rgba(0,0,0,0.3)" }} />
        <div
          style={{
            width: "clamp(12px, 1.5vw, 15px)",
            height: "clamp(68px, 10vh, 100px)",
            background: "linear-gradient(90deg, #334155 0%, #94a3b8 25%, #f8fafc 50%, #94a3b8 75%, #334155 100%)",
            borderRadius: 999,
            boxShadow: "3px 3px 12px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.65)",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: "30%", height: "40%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", padding: "4px 0", background: "rgba(51,65,85,0.14)" }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: "100%", height: 1, background: "rgba(241,245,249,0.5)" }} />
            ))}
          </div>
          <div
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, transparent 15%, rgba(255,255,255,0.92) 50%, transparent 85%)",
              transform: isUnlocked ? "translateY(100%)" : "translateY(-100%)",
              transition: "transform 650ms ease-out",
            }}
          />
        </div>
        <div style={{ width: "80%", height: 12, background: "linear-gradient(90deg, #475569, #e2e8f0, #475569)", borderRadius: 3, boxShadow: "0 1px 4px rgba(0,0,0,0.3)" }} />
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1e293b", boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3)" }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  SHARED STYLE TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const DOOR_SURFACE: CSSProperties = {
  background: "linear-gradient(180deg, #1a5075 0%, #164666 42%, #0d2b40 100%)",
};

const GLASS_PANEL: CSSProperties = {
  background: "rgba(255,255,255,0.065)",
  border: "1px solid rgba(255,255,255,0.13)",
  borderRadius: 6,
  boxShadow: "inset 0 4px 16px rgba(0,0,0,0.3)",
  backgroundImage:
    "repeating-linear-gradient(90deg," +
    "rgba(255,255,255,0.055) 0px," +
    "rgba(255,255,255,0.09)  6px," +
    "rgba(10,31,48,0.5)      7px," +
    "rgba(10,31,48,0.55)    10px," +
    "rgba(255,255,255,0.055) 13px)",
};

const SILVER_BAR: CSSProperties = {
  background:
    "linear-gradient(90deg, #334155 0%, #94a3b8 25%, #e2e8f0 50%, #94a3b8 75%, #334155 100%)",
};

// ─────────────────────────────────────────────────────────────────────────────
//  DOOR LEAF — defined outside main component (CSS transitions never interrupted)
// ─────────────────────────────────────────────────────────────────────────────
function DoorLeaf({
  side,
  isOpening,
  isUnlocked,
}: {
  side: "left" | "right";
  isOpening: boolean;
  isUnlocked: boolean;
}) {
  const isLeft = side === "left";

  return (
    <div
      style={{
        position: "absolute",
        top: 0, bottom: 0,
        [isLeft ? "left" : "right"]: 0,
        width: "50%",
        willChange: "transform",
        transformOrigin: `${isLeft ? "left" : "right"} center`,
        transformStyle: "preserve-3d",
        transform: isOpening
          ? `perspective(1800px) rotateY(${isLeft ? -84 : 84}deg)`
          : "perspective(1800px) rotateY(0deg)",
        transition: `transform ${T_SWING_DUR}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      {/* ── Door face ──────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: "100%", height: "100%",
          overflow: "hidden",
          ...DOOR_SURFACE,
          boxShadow: isLeft
            ? "16px 0 55px rgba(0,0,0,0.42)"
            : "-16px 0 55px rgba(0,0,0,0.42)",
          borderRight: isLeft ? "1px solid rgba(255,255,255,0.07)" : undefined,
          borderLeft: !isLeft ? "1px solid rgba(255,255,255,0.07)" : undefined,
        }}
      >
        {/* Inner bevel reveal */}
        <div
          style={{
            position: "absolute",
            inset: "clamp(8px,1.5vw,16px)",
            border: "1px solid rgba(255,255,255,0.11)",
            borderRadius: 5,
            boxShadow: "inset 0 2px 10px rgba(0,0,0,0.28)",
            pointerEvents: "none",
          }}
        />

        {/* 3 Ball-tip hinges on outer jamb edge */}
        <div style={{ position: "absolute", top: "clamp(60px,10vh,96px)", [isLeft ? "left" : "right"]: 0 }}>
          <BallTipHinge side={isLeft ? "left" : "right"} />
        </div>
        <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", [isLeft ? "left" : "right"]: 0 }}>
          <BallTipHinge side={isLeft ? "left" : "right"} />
        </div>
        <div style={{ position: "absolute", bottom: "clamp(60px,10vh,96px)", [isLeft ? "left" : "right"]: 0 }}>
          <BallTipHinge side={isLeft ? "left" : "right"} />
        </div>

        {/* Panel column */}
        <div
          style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            padding: "clamp(14px,2.2vw,32px)",
            gap: "clamp(8px,1.2vh,16px)",
          }}
        >
          {/* TOP ARCH PANEL */}
          <div
            style={{
              width: "100%",
              height: "clamp(50px,10vh,96px)",
              flexShrink: 0,
              background: "rgba(255,255,255,0.065)",
              border: "1px solid rgba(255,255,255,0.13)",
              borderRadius: 6,
              boxShadow: "inset 0 2px 10px rgba(0,0,0,0.26)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)" }} />
            <div style={{ position: "absolute", top: "50%", left: 16, right: 16, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)" }} />
          </div>

          {/* MAIN REEDED GLASS PANEL (HOLDS CENTERED BLACK LOGO & INNER HANDLE) */}
          <div
            style={{
              ...GLASS_PANEL,
              position: "relative",
              flex: 1,
              overflow: "hidden",
            }}
          >
            {/* Ambient Glass Glare */}
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to ${isLeft ? "top right" : "top left"}, transparent, rgba(255,255,255,0.05), transparent)`, pointerEvents: "none" }} />

            {/* ── BOLD BLACK MANI LIFESTYLE LOGO (CENTERED INSIDE EACH DOOR LEAF) ── */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "clamp(190px, 24vw, 320px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pointerEvents: "none",
                zIndex: 10,
              }}
            >
              {/* Luminous Frosted Crystal Plaque Chassis */}
              <div
                style={{
                  width: "100%",
                  background: "rgba(255, 255, 255, 0.96)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1.5px solid #164666",
                  borderRadius: 14,
                  boxShadow:
                    "0 14px 40px rgba(9, 25, 42, 0.38), 0 3px 10px rgba(22, 70, 102, 0.16), inset 0 1px 0 #ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "clamp(12px, 1.8vh, 18px) clamp(16px, 2.4vw, 28px)",
                }}
              >
                {/* Top micro-rule */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                  <span style={{ width: 14, height: 1, background: "rgba(22,70,102,0.45)" }} />
                  <span
                    style={{
                      fontSize: "clamp(7.5px, 0.9vw, 9.5px)",
                      letterSpacing: "0.28em",
                      fontWeight: 700,
                      color: "#164666",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    PRESTIGE COSMETICS
                  </span>
                  <span style={{ width: 14, height: 1, background: "rgba(22,70,102,0.45)" }} />
                </div>

                {/* The MANI LIFESTYLE Logo — IN ORIGINAL RICH BOLD BLACK, BIG & CLEAR */}
                <div
                  style={{
                    position: "relative",
                    width: "clamp(160px, 20vw, 260px)",
                    height: "clamp(44px, 5.8vw, 70px)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/mani-lifestyle-logo.png"
                    alt="Mani Lifestyle"
                    fill
                    priority
                    quality={100}
                    className="object-contain"
                    style={{
                      // Original deep black text — crisp and 100% legible!
                      filter: "drop-shadow(0 2px 6px rgba(22,70,102,0.18))",
                    }}
                  />
                  {/* Specular sheen sweep on unlock */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.85) 50%, transparent 75%)",
                      transform: isUnlocked
                        ? "translateX(220%) skewX(-25deg)"
                        : "translateX(-170%) skewX(-25deg)",
                      transition: "transform 750ms ease-out",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Subtitle */}
                <span
                  style={{
                    fontSize: "clamp(6.5px, 0.75vw, 8px)",
                    letterSpacing: "0.2em",
                    color: "#64748b",
                    textTransform: "uppercase",
                    marginTop: 4,
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Certified Manufacturer
                </span>
              </div>
            </div>

            {/* ── SOLID BRUSHED-SILVER PULL HANDLE (DOCKED TO INNER MEETING STILE) ── */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                [isLeft ? "right" : "left"]: "clamp(10px, 1.6vw, 24px)",
              }}
            >
              <PullHandle isUnlocked={isUnlocked} />
            </div>
          </div>

          {/* BOTTOM KICK PANEL — silver apron */}
          <div
            style={{
              width: "100%",
              height: "clamp(46px,9vh,84px)",
              flexShrink: 0,
              background: "rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 6,
              boxShadow: "inset 0 4px 12px rgba(0,0,0,0.32)",
              display: "flex", flexDirection: "column", justifyContent: "flex-end",
              overflow: "hidden",
            }}
          >
            <div style={{ ...SILVER_BAR, height: "clamp(12px,2.2vh,20px)", borderTop: "1px solid rgba(255,255,255,0.28)" }} />
          </div>
        </div>

        {/* Astragal seam — meeting edge */}
        <div
          style={{
            position: "absolute", top: 0, bottom: 0,
            [isLeft ? "right" : "left"]: 0,
            width: 6, pointerEvents: "none",
            background: "linear-gradient(180deg, #475569, #94a3b8 20%, #e2e8f0 50%, #94a3b8 80%, #475569)",
            boxShadow: isLeft ? "-2px 0 6px rgba(0,0,0,0.5)" : "2px 0 6px rgba(0,0,0,0.5)",
          }}
        />
      </div>

      {/* ── 3D thickness edge (visible during swing) ───────────────────────── */}
      <div
        style={{
          position: "absolute", top: 0, bottom: 0,
          [isLeft ? "right" : "left"]: 0,
          width: "clamp(26px,2vw,38px)",
          pointerEvents: "none",
          transform: `rotateY(${isLeft ? 90 : -90}deg) translateZ(-18px)`,
          transformOrigin: `${isLeft ? "right" : "left"} center`,
          background: "linear-gradient(90deg, #0a1f30, #122c43)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 18, height: 68,
            background: "linear-gradient(180deg, #475569, #cbd5e1 40%, #94a3b8 100%)",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.28)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "space-around",
            padding: "6px 0",
          }}
        >
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1e293b" }} />
          <div style={{ width: 10, height: 12, background: "rgba(15,23,42,0.75)", borderRadius: 2, boxShadow: "inset 0 1px 3px rgba(0,0,0,0.6)" }} />
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1e293b" }} />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN PRELOADER
// ─────────────────────────────────────────────────────────────────────────────
export default function InitialPreloader() {
  const [phase, setPhase] = useState<"initial" | "unlocked" | "opening" | "done">("initial");
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const openDoors = useCallback(() => {
    setPhase((prev) => {
      if (prev === "opening" || prev === "done") return prev;
      document.body.style.overflow = "";
      return "opening";
    });
    setProgress(100);
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    setTimeout(() => setPhase("done"), T_DONE);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = Date.now();

    // Smooth progress bar: 0 → 85% over T_SWING ms, then jumps to 100% on open
    const tick = () => {
      const p = Math.min(((Date.now() - start) / T_SWING) * 85, 85);
      setProgress(p);
      if (p < 85) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const t1 = setTimeout(() => {
      setPhase((p) => (p === "initial" ? "unlocked" : p));
    }, T_SHEEN);

    const t2 = setTimeout(openDoors, T_SWING);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
  }, [openDoors]);

  if (phase === "done") return null;

  const isOpening  = phase === "opening";
  const isUnlocked = phase === "unlocked" || phase === "opening";

  return (
    <div
      onClick={openDoors}
      style={{
        position: "fixed",
        inset: 0,
        height: "100dvh",
        zIndex: 99999,
        userSelect: "none",
        cursor: "pointer",
        overflow: "hidden",
        isolation: "isolate",
        perspective: "1800px",
        perspectiveOrigin: "50% 50%",
        opacity: isOpening ? 0 : 1,
        pointerEvents: isOpening ? "none" : "auto",
        transition: `opacity ${T_FADE_DUR}ms ease-out`,
        transitionDelay: isOpening ? `${T_FADE_DELAY}ms` : "0ms",
      }}
    >
      {/* ── Camera push-in wrapper ─────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: "100%", height: "100%",
          display: "flex", alignItems: "center", justifyContent: "center",
          willChange: "transform",
          transformStyle: "preserve-3d",
          transform: isOpening
            ? "scale(1.1) translateZ(90px)"
            : "scale(1) translateZ(0px)",
          transition: `transform ${T_SWING_DUR + 200}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      >
        {/* Cool scientific backdrop */}
        <div
          style={{
            position: "absolute", inset: 0, zIndex: -30,
            background: "linear-gradient(180deg, #f8fafc 0%, #edf4f9 60%, rgba(219,234,254,0.4) 100%)",
          }}
        />
        {/* Soft radial glow */}
        <div
          style={{
            position: "absolute", zIndex: -20, pointerEvents: "none",
            borderRadius: "50%", filter: "blur(60px)",
            width: "clamp(380px,50vw,660px)",
            height: "clamp(380px,50vw,660px)",
            background: "radial-gradient(circle, rgba(186,230,255,0.55) 0%, rgba(147,197,253,0.3) 40%, transparent 70%)",
            transform: isOpening ? "scale(1.5)" : "scale(1)",
            opacity: isOpening ? 0.85 : 0.5,
            transition: "transform 1200ms ease-out, opacity 1200ms ease-out",
          }}
        />

        {/* ── ARCHITECTURAL CASING ─────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute", inset: 0,
            pointerEvents: "none", zIndex: 20,
            border: "clamp(10px,2.1vw,22px) solid #09192a",
            boxShadow: "inset 0 0 70px rgba(5,12,25,0.6)",
          }}
        >
          {/* Top lintel */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "clamp(4px,0.6vh,8px)", ...SILVER_BAR }} />
          {/* Bottom threshold — fills as progress bar */}
          <div
            style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "clamp(10px,1.6vh,18px)",
              background: "rgba(203,213,225,0.1)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute", left: 0, top: 0, bottom: 0,
                width: `${progress}%`,
                ...SILVER_BAR,
                transition: "width 80ms linear",
              }}
            />
          </div>
        </div>

        {/* ── DOOR LEAVES (EACH CARRIES ITS OWN CENTERED BLACK LOGO) ────────── */}
        <DoorLeaf side="left"  isOpening={isOpening} isUnlocked={isUnlocked} />
        <DoorLeaf side="right" isOpening={isOpening} isUnlocked={isUnlocked} />
      </div>

      {/* ── BOTTOM STATUS STRIP (CLEAN & SUBTLE) ───────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(4px, 0.6vh, 8px)",
          left: 0, right: 0,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          opacity: isOpening ? 0 : 1,
          transition: "opacity 200ms ease-out",
          pointerEvents: "none",
        }}
      >
        <span
          className={isUnlocked ? "" : "animate-ping"}
          style={{
            display: "block",
            width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
            background: isUnlocked ? "#10b981" : "rgba(226,232,240,0.75)",
            boxShadow: isUnlocked ? "0 0 8px rgba(16,185,129,0.8)" : "none",
            transition: "background 300ms, box-shadow 300ms",
          }}
        />
        <span
          style={{
            fontSize: "clamp(8px, 0.9vw, 10px)",
            letterSpacing: "0.26em",
            color: "rgba(226,232,240,0.75)",
            textTransform: "uppercase",
            fontFamily: "var(--font-geist-sans)",
            fontWeight: 600,
          }}
        >
          {isUnlocked ? "ENTERING FLAGSHIP ATELIER" : "CLICK ANYWHERE TO ENTER"}
        </span>
      </div>
    </div>
  );
}
