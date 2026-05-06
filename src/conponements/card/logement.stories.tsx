import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Logement from "./logement";

const meta = {
  title: "Conponements/Card/Logement",
  component: Logement,
  parameters: {
    docs: {
      description: {
        component:
          "Carte de logement affichant l'image, le titre, la localisation, le prix et le bouton favoris.",
      },
    },
  },
  argTypes: {
    Pictest: {
      control: "text",
      description: "Chemin ou URL de l'image (ex: /images/sample.jpg ou https://...)",
    },
    TitleLogement: { control: "text", description: "Titre du logement" },
    LocationLogement: { control: "text", description: "Localisation affichée" },
    price: { control: "number", description: "Prix par nuit (en €)" },
    slug: { control: "text", description: "Lien/slug vers la page du logement" },
    idFav: { control: "text", description: "Identifiant utilisé pour les favoris" },
  },
} satisfies Meta<typeof Logement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Pictest:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    TitleLogement: "Appartement cosy",
    LocationLogement: "Paris, France",
    price: 98,
    slug: "appartement-cosy",
    idFav: "c67ab8a7",
  },
};

export const Favorited: Story = {
  args: {
    ...Default.args,
    idFav: "fav-1",
  },
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
};