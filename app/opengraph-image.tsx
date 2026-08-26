import { ImageResponse } from "next/og";

export const alt = "ReGest — El ERP para autónomos de reformas y construcción";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#222B2E",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              borderRadius: 22,
              background: "#27AE9D",
              color: "#ffffff",
              fontSize: 56,
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800 }}>
            <span style={{ color: "#27AE9D" }}>Re</span>
            <span style={{ color: "#ffffff" }}>Gest</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 34,
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
          }}
        >
          El ERP para autónomos de reformas y construcción
        </div>
      </div>
    ),
    { ...size }
  );
}
