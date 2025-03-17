import type { MetadataRoute } from "next";
import myProjects from "@/modules/clients/utils/myProjects";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    console.log("Generating sitemap...");
    console.log("Base URL:", baseUrl); // Debug: Check the base URL

    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_API_URL is not set.");
    }

    const projects = myProjects.map((project) => ({
      url: `${baseUrl}/projects/${project.name.toLowerCase()}`,
      lastModified: new Date(),
    }));

    console.log("Sitemap entries:", [
      {
        url: `${baseUrl}`,
        lastModified: new Date(),
      },
      ...projects,
    ]);

    return [
      {
        url: `${baseUrl}`,
        lastModified: new Date(),
      },
      ...projects,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return []; // Return an empty sitemap if there's an error
  }
}
