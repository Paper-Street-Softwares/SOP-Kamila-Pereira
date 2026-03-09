import { lazy, Suspense } from "react";

// CRÍTICO — carregamento imediato (LCP)
import NavbarNovaTemplate from "../components/sections/NavbarNovaTemplate";
import HeroTemplateNovo from "../components/sections/HeroTemplateNovo";
import StepsNovoTemplate from "../components/sections/StepsNovoTemplate";
import FaqNovoTemplate from "../components/sections/FaqNovoTemplate";

// Lazy — abaixo da dobra
const FeaturesNovaTemplate = lazy(
  () => import("../components/sections/FeaturesNovaTemplate"),
);
const CtaNovoTemplate = lazy(
  () => import("../components/sections/CtaNovoTemplate"),
);
const AboutNovoTemplate = lazy(
  () => import("../components/sections/AboutNovoTemplate"),
);

const SocialMediaTemplate = lazy(
  () => import("../components/sections/SocialMediaTemplate"),
);
const FooterNovoTemplate = lazy(
  () => import("../components/sections/FooterNovoTemplate"),
);
const WhatsappAnimated = lazy(
  () => import("../components/interactives/WhatsAppAnimated"),
);

const BlogPosts = lazy(() => import("../components/sections/BlogPosts"));

import { useContext } from "react";
import { ColorModeProvider } from "../context/UseContextArchive";
import { useColorMode } from "../context/UseContextArchive";
import Cards from "../components/sections/Cards";
import InventarioComparativo from "../components/sections/Tabela";
import Important from "../components/sections/Important";
import Authority from "../components/sections/Authority";
import Speed from "../components/sections/Speed";
import Emergency from "../components/sections/Emergency";
import { Diferences } from "../components/sections/Diferences";
import { AlternatingSection } from "../components/sectionElements/AlternatingSection";
import Parceria from "../components/sections/Parceria";
import FormNovoTemplate from "../components/sections/FormNovoTemplate";
import AuthorityAndAlert from "../components/sections/AuthorityAndAlert";
import SocialProof from "../components/sections/SocialProof";
import SIteCompleto from "../components/sections/SIteCompleto";
import ModalFooter from "../modalFooter";

export default function Index() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <>
      <ColorModeProvider>
        <main>
          <SIteCompleto />
          <ModalFooter />
        </main>
      </ColorModeProvider>
    </>
  );
}

//imagens
