import Image from "next/image";

import profile from "@/assets/images/profile.jpg";

export default function AboutImage() {
  return (
    <div className="relative mx-auto">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
        <Image
          src={profile}
          alt="Nurul Amin"
          width={500}
          height={600}
          className="rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}
