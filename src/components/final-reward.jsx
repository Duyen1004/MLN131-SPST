import React, { useState, useEffect } from "react";
import { Gem, Compass, Flame, Scale, Shield, Bell, ArrowRight, RotateCcw, Home, Sparkles, Sun, Printer, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAssetPath } from "@/lib/utils";

const TREASURES = [
  {
    id: 1,
    name: "Đá Khởi Nguyên",
    desc: "Khởi nguồn tri thức triết học",
    icon: Gem,
    color: "from-blue-400 to-indigo-600",
    glow: "shadow-[0_0_30px_rgba(99,102,241,0.6)]",
    stage: "Ải 1"
  },
  {
    id: 2,
    name: "Kính Dẫn Đường",
    desc: "Định hướng lối thoát trong hang",
    icon: Compass,
    color: "from-teal-400 to-emerald-600",
    glow: "shadow-[0_0_30px_rgba(20,184,166,0.6)]",
    stage: "Ải 2"
  },
  {
    id: 3,
    name: "Lư Hương Chuyển Hóa",
    desc: "Cải biến nhận thức sâu sắc",
    icon: Flame,
    color: "from-orange-400 to-red-600",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.6)]",
    stage: "Ải 3"
  },
  {
    id: 4,
    name: "Cán Cân Công Lý",
    desc: "Cân bằng lẽ phải và chân lý",
    icon: Scale,
    color: "from-amber-400 to-yellow-600",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.6)]",
    stage: "Ải 4"
  },
  {
    id: 5,
    name: "Ấn Tín Liên Minh",
    desc: "Khối đại đoàn kết bền vững",
    icon: Shield,
    color: "from-purple-400 to-pink-600",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.6)]",
    stage: "Ải 5"
  },
  {
    id: 6,
    name: "Chuông Hòa Hợp",
    desc: "Âm thanh hòa quyện đồng điệu",
    icon: Bell,
    color: "from-sky-400 to-blue-600",
    glow: "shadow-[0_0_30px_rgba(56,189,248,0.6)]",
    stage: "Ải 6"
  }
];

export function FinalReward({ earnedTreasureIds = TREASURES.map((item) => item.id), onReset, onBackToHome }) {
  // States: 'gather' | 'merging' | 'merged' | 'revealing' | 'victory'
  const [phase, setPhase] = useState("gather");
  const [activeTreasureIndex, setActiveTreasureIndex] = useState(0);
  const [studentName, setStudentName] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);
  const earnedTreasures = TREASURES.filter((item) => earnedTreasureIds.includes(item.id));

  useEffect(() => {
    if (phase === "gather") {
      const interval = setInterval(() => {
        setActiveTreasureIndex((prev) => (prev + 1) % earnedTreasures.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [earnedTreasures.length, phase]);

  function handleStartMerge() {
    setPhase("merging");

    // After 2.5 seconds of fast rotation, trigger the flash/merge
    setTimeout(() => {
      setPhase("merged");
    }, 2500);
  }

  function handleRevealWorld() {
    setPhase("revealing");

    // After a brief flash/transition, show the victory screen
    setTimeout(() => {
      setPhase("victory");
    }, 1800);
  }

  function handlePrint() {
    window.print();
  }

  return (
    <>
      {/* Dynamic inline styles for smooth animations and printing optimization */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.03); }
        }
        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.4); }
          50% { box-shadow: 0 0 60px rgba(245, 158, 11, 0.8); }
        }
        @keyframes spin-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes flash-in {
          0% { opacity: 0; }
          40% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes fire-flicker {
          0%, 100% { transform: scale(1) rotate(-1deg); filter: brightness(1); }
          20% { transform: scale(1.05) rotate(1deg); filter: brightness(1.1); }
          40% { transform: scale(0.95) rotate(-2deg); filter: brightness(0.9); }
          60% { transform: scale(1.02) rotate(2deg); filter: brightness(1.15); }
          80% { transform: scale(0.98) rotate(0deg); filter: brightness(0.95); }
        }
        @keyframes sun-ray {
          0% { transform: rotate(0deg); opacity: 0.15; }
          100% { transform: rotate(360deg); opacity: 0.35; }
        }
        .animate-float {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-pulse-gold {
          animation: pulse-gold 3s ease-in-out infinite;
        }
        .animate-fire {
          animation: fire-flicker 0.15s ease-in-out infinite;
        }
        .animate-sun-ray {
          animation: sun-ray 25s linear infinite;
        }

        /* PRINT STYLING */
        @page {
          size: A4 landscape;
          margin: 10mm;
        }

        @media print {
          html, body {
            width: 100%;
            height: 100%;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          body {
            background: white !important;
            color: black !important;
          }
          /* Hide everything else */
          body * {
            visibility: hidden;
          }
          /* Show only the certificate */
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 1120px !important;
            max-width: calc(100vw - 20mm) !important;
            height: auto !important;
            aspect-ratio: 865 / 405;
            box-shadow: none !important;
            border: 6px double #d4af37 !important;
            background: #fffdf5 !important;
            margin: 0 !important;
            padding: 20px !important;
            overflow: hidden !important;
          }
        }
      `}</style>

      <div className="mx-auto flex h-full max-w-[1320px] items-center">
        <Card className="relative h-full w-full overflow-hidden rounded-[38px] border-[#ecd7ad] bg-[linear-gradient(135deg,rgba(26,21,16,0.97)_0%,rgba(17,14,11,0.985)_52%,rgba(9,8,6,0.99)_100%)] text-white shadow-[0_28px_90px_rgba(59,41,14,0.32)]">
          {/* BACKGROUND PHASES */}
          {(phase === "gather" || phase === "merging" || phase === "merged") && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-40 select-none pointer-events-none"
              style={{ backgroundImage: `url(${getAssetPath("images/cave-stage-bg.png")})` }}
            />
          )}

          {phase === "revealing" && (
            <div className="absolute inset-0 z-40 flex items-center justify-center bg-white animate-[flash-in_1.8s_ease-out_forwards]">
              <div className="h-full w-full bg-[radial-gradient(circle,rgba(255,236,179,1)_0%,rgba(255,255,255,1)_60%,rgba(245,158,11,1)_100%)]" />
            </div>
          )}

          {phase === "victory" && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] opacity-80 select-none pointer-events-none"
              style={{ backgroundImage: `url(${getAssetPath("images/world-map-forest-mountain-bg.png")})` }}
            />
          )}

          {phase !== "victory" && phase !== "revealing" && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.9)_80%)] pointer-events-none" />
          )}

          {phase === "victory" && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,220,0.15)_0%,rgba(24,32,20,0.85)_100%)] pointer-events-none" />
          )}

          {/* MAIN LAYOUT */}
          <CardContent
            className={`relative z-10 flex min-h-0 flex-col items-center px-4 py-5 md:px-5 lg:px-6 ${
              phase === "victory"
                ? "h-full justify-start gap-2 overflow-hidden py-4"
                : "h-full justify-between"
            }`}
          >
        
        {/* HEADER / NARRATION PANEL */}
        <div className={`max-w-[740px] px-2 text-center ${phase === "victory" ? "space-y-1.5" : "space-y-3"}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-widest animate-pulse">
            <Sparkles className="h-3 w-3" />
            <span>PHẦN THƯỞNG ĐẶC BIỆT</span>
          </div>

          <h1 className={`font-title font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-500 leading-normal ${
            phase === "victory" ? "py-0.5 text-[38px] md:text-[50px]" : "py-2 text-3xl md:text-5xl"
          }`}>
            {phase === "gather" && "SÁU BẢO VẬT HỘI TỤ"}
            {phase === "merging" && "HỢP NHẤT BẢO VẬT..."}
            {phase === "merged" && "NGỌN ĐUỐC CHÂN LÝ"}
            {phase === "revealing" && "ÁNH SÁNG LAN TỎA"}
            {phase === "victory" && (showCertificate ? "CHỨNG NHẬN VINH DANH" : "THẾ GIỚI THỰC LỘ DIỆN")}
          </h1>

          <p className={`leading-relaxed text-amber-100/85 ${phase === "victory" ? "text-[13px] md:text-[15px]" : "text-sm md:text-base"}`}>
            {phase === "gather" && "Sáu bảo vật linh thiêng từ sáu ải tri thức đang tỏa sáng rực rỡ, sẵn sàng hợp nhất thành nguồn năng lượng vĩ đại nhất."}
            {phase === "merging" && "Năng lượng từ 6 ải giao thoa, xoáy sâu vào không gian, phá tan màn sương che phủ của những chiếc bóng trong hang."}
            {phase === "merged" && "Sáu mảnh bảo vật đã quy làm một, thắp lên Ngọn đuốc Chân lý. Hãy để ánh sáng của nó dẫn dắt tâm trí bạn thoát khỏi hang tối."}
            {phase === "revealing" && "Luồng sáng vĩ đại quét qua vách đá, xóa nhòa những cái bóng giả tạo của cuộc đời ảo ảnh..."}
            {phase === "victory" && (
              showCertificate 
                ? "Chứng nhận ghi nhận hành trình khai phóng tâm thức, thắp sáng con đường tri thức và vượt thoát khỏi hang động Plato."
                : "Ánh sáng chân lý đã chiếu rọi toàn bộ hang động, biến những ảo ảnh bóng tối thành cát bụi và mở ra trước mắt bạn thế giới thật tươi sáng đầy tự do!"
            )}
          </p>
        </div>

        {/* INTERACTIVE CENTRAL ANIMATION AREA */}
        <div
          className={`relative flex w-full items-center justify-center ${
            phase === "victory" ? "my-0 flex-none" : "my-4 min-h-0 flex-1"
          }`}
        >
          
          {/* ORBIT OF THE 6 TREASURES */}
          {(phase === "gather" || phase === "merging") && (
            <div 
              className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-dashed border-amber-500/20 flex items-center justify-center"
              style={{
                animation: phase === "merging" ? "spin-orbit 1.2s linear infinite" : "spin-orbit 12s linear infinite"
              }}
            >
              {earnedTreasures.map((item, idx) => {
                const total = earnedTreasures.length;
                const angle = (idx * 360) / total;
                const radius = phase === "merging" ? "20px" : "130px"; // Converging effect in CSS
                
                const IconComponent = item.icon;
                const isActive = activeTreasureIndex === idx && phase === "gather";

                return (
                  <div
                    key={item.id}
                    className="absolute transition-all duration-1000 ease-in-out"
                    style={{
                      transform: `rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`,
                    }}
                  >
                    {/* Treasure Node */}
                    <div 
                      className={`relative flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${item.color} ${item.glow} border border-white/20 transition-all duration-300 ${
                        isActive ? "scale-125 z-20 border-white" : "scale-100 opacity-90"
                      }`}
                      style={{
                        animation: "counter-spin 12s linear infinite",
                        animationPlayState: phase === "merging" ? "paused" : "running"
                      }}
                    >
                      <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                      
                      {/* Aura Ripple for active */}
                      {isActive && (
                        <div className="absolute inset-[-6px] rounded-full border border-white/40 animate-ping" />
                      )}
                    </div>

                    {/* Miniature label for active items */}
                    {isActive && (
                      <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-max bg-black/90 border border-amber-500/50 text-[10px] font-bold px-2 py-0.5 rounded text-amber-300 shadow-md">
                        {item.name}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* INNER CENTER CORE */}
          {phase === "gather" && (
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center animate-pulse">
              <Sparkles className="h-6 w-6 text-amber-500/70" />
            </div>
          )}

          {phase === "merging" && (
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 blur-md animate-ping" />
          )}

          {/* THE TORCH OF TRUTH REVEALED */}
          {(phase === "merged" || phase === "revealing") && (
            <div className="relative flex flex-col items-center animate-float">
              {/* Massive Sunburst Ray Behind */}
              <div className="absolute w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.25)_0%,transparent_70%)] animate-pulse" />
              <div className="absolute w-[400px] h-[400px] rounded-full border border-amber-400/10 animate-sun-ray" 
                style={{ backgroundImage: "repeating-conic-gradient(from 0deg, transparent 0deg, transparent 15deg, rgba(245,158,11,0.06) 15deg, rgba(245,158,11,0.06) 30deg)" }}
              />

              {/* Torch Body and Fire */}
              <div className="relative flex flex-col items-center w-40 h-52">
                {/* Flame Container */}
                <div className="absolute top-0 flex items-end justify-center w-24 h-24">
                  {/* Outer Flame Glow */}
                  <div className="absolute w-20 h-20 rounded-full bg-orange-500/40 blur-xl animate-pulse" />
                  
                  {/* Flame Shapes (layered for realism) */}
                  <div className="w-14 h-20 bg-gradient-to-t from-orange-600 via-amber-400 to-yellow-200 rounded-t-[50%] rounded-b-[40%] origin-bottom animate-fire" />
                  <div className="absolute w-8 h-12 bg-gradient-to-t from-red-600 via-orange-400 to-yellow-100 rounded-t-[50%] rounded-b-[40%] origin-bottom opacity-80 animate-fire" style={{ animationDelay: "0.05s" }} />
                  <div className="absolute w-5 h-8 bg-white/90 rounded-t-[50%] rounded-b-[40%] origin-bottom opacity-90 animate-fire" style={{ animationDelay: "0.1s" }} />
                </div>

                {/* Torch Handle / Vessel */}
                <div className="absolute bottom-4 flex flex-col items-center">
                  {/* Metal Bowl */}
                  <div className="w-20 h-10 bg-gradient-to-b from-[#eedba5] via-[#c99f4d] to-[#996d24] rounded-t-lg rounded-b-3xl border border-amber-300/40 shadow-xl flex items-center justify-center">
                    {/* Ornaments */}
                    <div className="w-16 h-1.5 rounded bg-black/30 border-t border-amber-300/30" />
                  </div>
                  {/* Grip */}
                  <div className="w-7 h-24 bg-gradient-to-r from-[#996d24] via-[#5c4114] to-[#996d24] rounded-b-lg border-x border-amber-500/20 shadow-md relative">
                    {/* Ring Grips */}
                    <div className="absolute top-4 inset-x-0 h-1 bg-[#2d1f08] border-y border-amber-300/20" />
                    <div className="absolute top-10 inset-x-0 h-1 bg-[#2d1f08] border-y border-amber-300/20" />
                    <div className="absolute top-16 inset-x-0 h-1 bg-[#2d1f08] border-y border-amber-300/20" />
                  </div>
                </div>
              </div>

              {/* Torch Label */}
              <div className="mt-4 px-4 py-1.5 rounded-full border border-amber-400 bg-gradient-to-r from-amber-600/80 to-yellow-600/80 shadow-[0_4px_20px_rgba(245,158,11,0.4)]">
                <span className="font-title text-sm font-bold tracking-wider text-amber-50 text-shadow-sm">
                  NGỌN ĐUỐC CHÂN LÝ
                </span>
              </div>
            </div>
          )}

          {/* FINAL VICTORY SCREEN STATE */}
          {phase === "victory" && (
            <div className="relative flex w-full max-w-[840px] flex-col items-center px-2">
              
              {/* THE CERTIFICATE VIEW */}
              {showCertificate ? (
                <div 
                  id="print-area"
                  className="relative flex h-[405px] w-full max-w-[865px] flex-col justify-between overflow-hidden rounded-3xl border-[6px] double border-amber-600/70 bg-[#fffdf6] px-5 py-4 text-[#5b401e] shadow-2xl"
                  style={{
                    backgroundImage: "radial-gradient(circle at center, rgba(254,249,195,0.2) 0%, transparent 80%)",
                  }}
                >
                  {/* Greek Classic Border Line Inside */}
                  <div className="absolute inset-2 border border-amber-800/10 pointer-events-none rounded-2xl" />
                  <div className="absolute inset-3 border-2 border-amber-600/20 pointer-events-none rounded-xl" />
                  
                  {/* Seal Watermark in center */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                    <Sun className="h-68 w-68 text-amber-900" />
                  </div>

                  {/* Top Header */}
                  <div className="relative mt-1 text-center">
                    <Award className="mx-auto h-5.5 w-5.5 text-amber-600 drop-shadow-sm" />
                    <div className="mx-auto mt-1.5 h-px w-20 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
                    <p className="mt-1.5 text-[8px] font-extrabold tracking-[0.2em] text-amber-700">
                      CỘNG HÒA TRI THỨC PHIÊN BẢN CỔ ĐẠI
                    </p>
                    <h2 className="mt-1 font-title text-[24px] font-black leading-tight tracking-wide text-amber-900 md:text-[32px]">
                      CHỨNG NHẬN KHAI PHÓNG TÂM TRÍ
                    </h2>
                  </div>

                  {/* Body Text */}
                  <div className="relative my-1 space-y-2.5 px-5 text-center md:px-10">
                    <p className="text-[10px] italic text-amber-700">Chứng nhận này trân trọng vinh danh học viên:</p>
                    
                    <h3 className="mx-auto min-h-[30px] max-w-[450px] rounded-full border border-amber-900/10 border-b border-dashed border-amber-900/25 bg-white/55 px-7 py-2.5 font-title text-[22px] font-black uppercase text-amber-950 shadow-[0_10px_24px_rgba(177,126,45,0.08)] drop-shadow-sm md:text-[28px]">
                      {studentName.trim() || "(Vui lòng điền tên của bạn)"}
                    </h3>

                    <p className="mx-auto max-w-[610px] text-[11px] font-medium leading-6 text-amber-900/90 md:text-[13px]">
                      Đã kiên trì học hỏi và hoàn thành xuất sắc thử thách <strong>"Hành trình thoát khỏi hang động Plato"</strong>. Vượt qua 6 ải lý luận sâu sắc, thu thập đủ 6 nguồn bảo vật tri thức để thắp sáng <strong>Ngọn đuốc Chân lý</strong>, khai mở tâm thức, bước ra ngoài thế giới hiện thực và tự do.
                    </p>
                  </div>

                  {/* Footer (Signatures & Seal) */}
                  <div className="relative mb-0.5 flex items-end justify-between gap-5 px-5 md:px-9">
                    <div className="w-1/3 text-left">
                      <p className="text-[10px] font-extrabold text-amber-800">NGÀY HOÀN THÀNH</p>
                      <p className="mt-1 text-[12px] font-bold text-amber-900">
                        {new Date().toLocaleDateString("vi-VN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        })}
                      </p>
                      <div className="mt-1.5 h-0.5 w-20 bg-amber-900/20" />
                    </div>

                    {/* Glowing Wax Seal */}
                    <div className="relative -mt-2 flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-300 bg-gradient-to-tr from-[#da251d] to-[#ff5d55] shadow-[0_10px_22px_rgba(218,37,29,0.3)]">
                      <div className="absolute inset-[3px] rounded-full border border-dashed border-white/20" />
                      <Sun className="h-6 w-6 text-amber-200" />
                      <span className="absolute -bottom-8 text-[9px] font-bold text-amber-800 tracking-widest whitespace-nowrap">ẤN TÍN CHÂN LÝ</span>
                    </div>

                    <div className="w-1/3 text-right">
                      <p className="text-[10px] font-extrabold text-amber-800">NGƯỜI DẪN ĐƯỜNG</p>
                      <p className="mt-1 text-[17px] font-bold italic leading-none tracking-wide text-amber-950 select-none">
                        Plato
                      </p>
                      <div className="ml-auto mt-1.5 h-0.5 w-20 bg-amber-900/20" />
                    </div>
                  </div>

                </div>
              ) : (
                /* MAIN VICTORY EMBLEM AND CARD */
                <Card className="w-full max-w-[760px] overflow-hidden rounded-[30px] border-[#ecc67e] bg-[linear-gradient(135deg,rgba(255,253,248,0.985)_0%,rgba(252,244,222,0.97)_52%,rgba(247,233,198,0.95)_100%)] text-[#5c411c] shadow-[0_18px_52px_rgba(151,118,43,0.22)]">
                  <CardContent className="flex flex-col items-center px-5 pb-5 pt-6 text-center md:px-7 md:pb-6 md:pt-6">
                    {/* Shiny Emblem */}
                    <div className="relative flex h-13 w-13 items-center justify-center rounded-full border border-[#ebd095] bg-gradient-to-tr from-amber-400 to-yellow-600 shadow-[0_7px_16px_rgba(214,158,46,0.26)]">
                      <Sun className="h-6.5 w-6.5 text-white animate-spin-slow" style={{ animationDuration: "20s" }} />
                      <Sparkles className="absolute right-1 top-1 h-3.5 w-3.5 text-amber-200 animate-pulse" />
                    </div>

                     <div className="mt-3 space-y-1">
                      <p className="text-[11px] font-extrabold tracking-[0.24em] text-[#a17424]">
                        CHÚC MỪNG HỌC VIÊN
                      </p>
                      <h2 className="font-title text-[23px] font-black leading-none text-[#5c4017] md:text-[32px]">
                        BƯỚC RA KHỎI HANG ĐỘNG
                      </h2>
                    </div>

                    <p className="mt-3 max-w-[520px] text-[13px] font-semibold leading-5 text-[#755c3c] md:text-[14px]">
                      Bạn đã xuất sắc vượt qua toàn bộ 6 thử thách, thấu hiểu tư tưởng biện chứng khoa học. Ngọn đuốc Chân lý đã giải phóng tâm trí, biến những chiếc bóng ảo ảnh thành tri thức thực thụ để bước vào thế giới thực tại sáng ngời.
                    </p>

                    {/* Custom Name input to generate certificate */}
                    <div className="mt-4 w-full max-w-[455px] rounded-[20px] border border-amber-900/10 bg-amber-900/5 px-3.5 py-2.5 shadow-[0_8px_18px_rgba(151,118,43,0.08)]">
                      <label className="block text-left text-[13px] font-bold text-amber-800">Nhập tên của bạn để cấp Chứng nhận Khai phóng:</label>
                      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                        <input 
                          type="text" 
                          placeholder="Họ và tên học viên..."
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          className="h-9 flex-1 rounded-[13px] border border-amber-300 bg-white px-3 text-[13px] font-bold text-[#5c411c] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                        <Button 
                          onClick={() => studentName.trim() && setShowCertificate(true)}
                          disabled={!studentName.trim()}
                          className="h-9 rounded-[13px] bg-gradient-to-r from-amber-600 to-amber-700 px-4 text-[13px] font-bold text-white hover:brightness-105 sm:min-w-[188px]"
                        >
                          Nhận chứng nhận
                        </Button>
                      </div>
                    </div>

                    {/* Summary of Treasures collected */}
                    <div className="mt-4 w-full max-w-[455px] border-t border-[#eadbb7] pt-3">
                      <div className="grid grid-cols-6 gap-2">
                      {earnedTreasures.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <div key={item.id} className="flex flex-col items-center gap-1">
                            <div className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow-sm`} title={item.name}>
                              <IconComponent className="h-3 w-3" />
                            </div>
                            <span className="text-[9px] font-bold text-[#8d714a]">{item.stage}</span>
                          </div>
                        );
                      })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

            </div>
          )}

        </div>

        {/* DYNAMIC ACTION BUTTONS */}
        <div
          className={`relative z-20 flex w-full flex-col items-center justify-center px-4 sm:flex-row ${
            phase === "victory" ? "mt-0.5 gap-2 pb-1" : "gap-3.5"
          }`}
        >
          {phase === "gather" && (
            <Button
              onClick={handleStartMerge}
              className="h-12 min-w-[260px] rounded-full bg-[linear-gradient(180deg,#ffe59b,#f5cc63)] border border-[#e5ba51] px-8 font-title text-[15px] font-black uppercase tracking-[0.12em] text-[#4f3718] shadow-[0_20px_42px_rgba(234,192,92,0.38)] hover:brightness-105 transition-all transform hover:scale-[1.03]"
            >
              Hợp nhất bảo vật
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}

          {phase === "merged" && (
            <Button
              onClick={handleRevealWorld}
              className="h-12 min-w-[260px] rounded-full bg-[linear-gradient(180deg,#ffce73,#eb9b2f)] border border-[#df8c22] px-8 font-title text-[15px] font-black uppercase tracking-[0.12em] text-white shadow-[0_20px_42px_rgba(235,145,52,0.4)] hover:brightness-105 transition-all transform hover:scale-[1.03]"
            >
              Chi chiếu thế giới thật
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          )}

          {phase === "victory" && (
            <>
              {showCertificate ? (
                <>
                  <Button
                    onClick={handlePrint}
                    className="h-12 min-w-[190px] rounded-full bg-[linear-gradient(180deg,#ffce73,#eb9b2f)] border border-[#df8c22] text-[14px] font-black text-white shadow-lg hover:brightness-105 transition-all transform hover:scale-[1.02]"
                  >
                    <Printer className="mr-2 h-4 w-4" />
                    In / Tải PDF chứng nhận
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setShowCertificate(false)}
                    className="h-12 min-w-[170px] rounded-full border-[#d8c49b] bg-white/90 text-[14px] font-bold text-[#5f4621] shadow-lg hover:bg-white transition-all transform hover:scale-[1.02]"
                  >
                    Quay lại tổng quan
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="secondary"
                    onClick={onBackToHome}
                    className="h-9 min-w-[152px] rounded-full border-[#d8c49b] bg-white/90 text-[13px] font-bold text-[#5f4621] shadow-lg hover:bg-white transition-all transform hover:scale-[1.02]"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Về trang chủ
                  </Button>
                  <Button
                    onClick={onReset}
                    className="h-9 min-w-[152px] rounded-full bg-[linear-gradient(180deg,#ffe59b,#f5cc63)] border border-[#e5ba51] text-[13px] font-black text-[#4f3718] shadow-lg hover:brightness-105 transition-all transform hover:scale-[1.02]"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Khám phá lại
                  </Button>
                </>
              )}
            </>
          )}
        </div>

          </CardContent>
        </Card>
      </div>
    </>
  );
}
