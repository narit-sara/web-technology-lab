import type { Band } from "@/types/band";

export const bands: Band[] = [
  {
    id: 1,
    name: "LYKN (ไลแคน)",
    genre: "T-Pop / Dance-Pop",
    description: "บอยกรุ๊ปแนวหน้าจากค่าย RISER MUSIC",
    image: "/images/bands/LYKN.jpg",
    members: [
      { name: "วิลเลี่ยม", role: "Main Vocal", image: "/images/bands/william.jpg" },
      { name: "เลโก้", role: "Main Dancer / Vocal", image: "/images/bands/lego.jpg" },
      { name: "นัท", role: "Vocal / Rapper", image: "/images/bands/nut.jpg" },
      { name: "ฮง", role: "Main Rapper", image: "/images/bands/hong.jpg" },
      { name: "ตุ้ย", role: "Vocal", image: "/images/bands/tui.jpg" },
    ],
  },
  {
    id: 2,
    name: "JASP.ER (แจสเปอร์)",
    genre: "T-Pop / Hip-Hop / R&B",
    description: "บอยกรุ๊ปสัญชาติไทยจากค่าย RISER MUSIC",
    image: "/images/bands/jasper.jpg",
    members: [
      { name: "จุง อาเชน (J)", role: "นักร้องหลัก", image: "/images/bands/joong.jpg" },
      { name: "อู๋ ธนบูรณ์ (A)", role: "หัวหน้าวงและนักร้องนำ", image: "/images/bands/aou.jpg" },
      { name: "แซนต้า พงศภัค (S)", role: "นักเต้นหลัก", image: "/images/bands/santa.jpg" },
      { name: "ปอนด์ ณราวิชญ์ (P)", role: "แร็ปเปอร์", image: "/images/bands/pond.jpg" },
    ],
  },
  {
    id: 3,
    name: "FELIZZ (เฟลลิส)",
    genre: "T-Pop / Girl Group",
    description: "วงเกิร์ลกรุ๊ป 6 สาวน้องใหม่ ภายใต้สังกัด RISER MUSIC ในเครือ GMMTV",
    image: "/images/bands/FELIZZ.jpg",
    members: [
      { name: "ชาริ (Chari)", role: "พี่ใหญ่, สายโวคอล", image: "/images/bands/chari.jpg" },
      { name: "เชลซี (Chelsea)", role: "นักร้องนำ, วิชวล, แร็ปเปอร์", image: "/images/bands/chelsea.jpg" },
      { name: "พรีม (Pream)", role: "แร็ปเปอร์หลัก, นักเต้นหลัก", image: "/images/bands/pream.jpg" },
      { name: "แซงต์ (Sangt)", role: "นักร้อง", image: "/images/bands/sangt.jpg" },
      { name: "เจ้าหญิง (Jaoying)", role: "สมาชิก", image: "/images/bands/jaoying.jpg" },
      { name: "เอแคร์ (Acare)", role: "สมาชิก", image: "/images/bands/acare.jpg" },
    ],
  },
  
];