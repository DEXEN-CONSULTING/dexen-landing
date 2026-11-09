import { ImageResponse } from "next/og";
import { GEAR_PATH } from "@/components/gear";
import { site } from "@/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: site.blue }}>
        <svg width="132" height="132" viewBox="0 0 24 24">
          <path d={GEAR_PATH} fill="#ffffff" fillRule="evenodd" />
        </svg>
      </div>
    ),
    size,
  );
}
