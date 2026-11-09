import { ImageResponse } from "next/og";
import { GEAR_PATH } from "@/components/gear";
import { site } from "@/site";

export const alt = "Dexen Consulting: sistemas que operan solos en tu empresa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: site.blueInk,
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Engrane grande de fondo, recortado por la esquina */}
        <svg
          width="620"
          height="620"
          viewBox="0 0 24 24"
          style={{ position: "absolute", right: -150, bottom: -170, opacity: 0.16 }}
        >
          <path d={GEAR_PATH} fill="#ffffff" fillRule="evenodd" />
        </svg>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 24 24">
            <path d={GEAR_PATH} fill={site.blue} fillRule="evenodd" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1 }}>Dexen</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}>
          <div style={{ fontSize: 76, lineHeight: 1.04, letterSpacing: -3, fontWeight: 400 }}>
            Sistemas que operan solos en tu empresa
          </div>
          <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.35, color: "rgba(255,255,255,0.72)" }}>
            Agentes de IA, contenido automático, software y ERP. Y los mantenemos corriendo.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26 }}>
          <div style={{ display: "flex", background: site.blue, padding: "12px 24px" }}>Pedir diagnóstico</div>
          <div style={{ color: "rgba(255,255,255,0.6)" }}>Consultoría de implementación · México</div>
        </div>
      </div>
    ),
    size,
  );
}
