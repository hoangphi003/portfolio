export interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  {
    icon: "🌐",
    label: "All",
    site: [
      {
        image:
          "https://ik.imagekit.io/kn40ppx9b/Portfolio/bg-footer.webp?updatedAt=1731050884202",
        title: "Website sàn giao dịch HG group",
        link: "https://hdgasia.vercel.app/",
      },
      {
        image:
          "https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/88bc172f-c212-4f44-9085-10eb9f8a720c/VN-vi-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_71151995-5bae-432d-9c03-031a4c0230fe_medium.jpg",
        title: "Xem phim online Emovie",
        link: "https://www.emoviehd.online/",
      },
    ],
  },
  {
    icon: "🔗",
    label: "Landing Page",
    site: [
      {
        image:
          "https://ik.imagekit.io/kn40ppx9b/Portfolio/bg-footer.webp?updatedAt=1731050884202",
        title: "Website sàn giao dịch HG group",
        link: "https://hdgasia.vercel.app/",
      },
    ],
  },
  {
    icon: "🔗",
    label: "Entertainment Page",
    site: [
      {
        image:
          "https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/88bc172f-c212-4f44-9085-10eb9f8a720c/VN-vi-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_71151995-5bae-432d-9c03-031a4c0230fe_medium.jpg",
        title: "Xem phim online Emovie",
        link: "https://www.emoviehd.online/",
      },
    ],
  },
];

const [all, landingPage, entertainment] = allIngredients;

export const initialTabs = [all, landingPage,entertainment];

export function getNextIngredient(
  ingredients: Ingredient[],
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
