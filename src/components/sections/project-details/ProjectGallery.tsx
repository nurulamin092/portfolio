import Image from "next/image";

import type { ProjectImage } from "@/types/project";

interface Props {
  gallery: ProjectImage[];
}

export default function ProjectGallery({ gallery }: Props) {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold">Project Gallery</h2>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {gallery.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-2xl border"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={1200}
              height={700}
              className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="border-t p-5">
              <h3 className="font-medium">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
