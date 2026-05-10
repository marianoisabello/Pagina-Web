# Pampai — Pagina Web: Context Document

## Que es este proyecto

Sitio web de marketing y generacion de leads para **Pampai**, una empresa de soluciones de Inteligencia Artificial aplicada. El sitio es bilingue (Espanol / Ingles) y sirve como vitrina de productos, proceso, casos de uso y punto de contacto comercial.

---

## Tech Stack

| Capa | Tecnologia |
|------|-----------|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Routing | React Router DOM v6 |
| UI base | Shadcn/ui + Tailwind CSS |
| Animaciones | Framer Motion |
| Graficos | Recharts |
| Iconos | Lucide React |
| Server state | TanStack React Query |
| i18n | React Context propio (`LanguageContext`) |
| Backend / DB | Supabase (PostgreSQL + Edge Functions) |
| AI del chatbot | Google Gemini 3 Flash Preview via Lovable AI Gateway |
| Notificaciones | Sonner + Toaster (Shadcn) |

---

## Estructura de carpetas

```
src/
├── App.tsx                        # Rutas + providers globales
├── main.tsx                       # Entry point React
├── index.css                      # Tailwind + CSS custom properties
├── components/
│   ├── PampaiAssistant.tsx        # Chatbot flotante (IA)
│   ├── WhatsAppButton.tsx         # Boton fijo de WhatsApp
│   ├── PageLayouts.tsx            # Templates reutilizables: ProductPageLayout, ProcessPageLayout
│   └── layout/
│       ├── SiteLayout.tsx         # Layout global (navbar + footer + widgets)
│       └── SiteNavbar.tsx         # Navbar fija con menu mobile y LangSwitch
├── contexts/
│   └── LanguageContext.tsx        # Provider de idioma (ES/EN), hook useLang()
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── integrations/
│   └── supabase/
│       ├── client.ts              # Instancia supabase-js
│       └── types.ts               # Tipos auto-generados del schema de DB
├── pages/
│   ├── Home.tsx
│   ├── Productos.tsx
│   ├── Proceso.tsx
│   ├── CasosDeUso.tsx
│   ├── Pricing.tsx
│   ├── ImpactoSocial.tsx
│   ├── Contacto.tsx
│   ├── NotFound.tsx
│   ├── products/
│   │   ├── AIData.tsx
│   │   ├── GenerativeAI.tsx
│   │   ├── Automation.tsx
│   │   ├── Agents.tsx
│   │   ├── DecisionCopilot.tsx
│   │   ├── SocialAI.tsx
│   │   └── AutonomousAgents.tsx
│   └── process/
│       ├── Entendimiento.tsx
│       ├── Diseno.tsx
│       ├── Construccion.tsx
│       └── Escala.tsx
└── assets/
    └── pampai-logo.jpeg

supabase/
├── config.toml                    # Project ID: hoaraatxovvyqsrgbcyt
├── functions/
│   └── chat/
│       └── index.ts               # Edge Function del chatbot (Deno)
└── migrations/                    # SQL migrations del schema
```

---

## Rutas de la aplicacion

```
/                          → Home
/productos                 → Index de productos
/productos/ai-data         → Pagina: AI Data
/productos/generative-ai   → Pagina: Generative AI
/productos/automation      → Pagina: Automatizacion
/productos/agents          → Pagina: Agentes
/productos/decision-copilot → Pagina: Decision Copilot (Premium)
/productos/social-ai       → Pagina: IA para infraestructura social (Premium)
/productos/autonomous-agents → Pagina: Agentes Autonomos (Premium)
/proceso                   → Index de proceso
/proceso/entendimiento     → Paso 1: Entendimiento
/proceso/diseno            → Paso 2: Diseno
/proceso/construccion      → Paso 3: Construccion
/proceso/escala            → Paso 4: Escala
/casos-de-uso              → Casos de uso
/pricing                   → Pricing
/impacto-social            → Impacto social / ONGs
/contacto                  → Formulario de contacto + agendar demo
/index                     → Redirect a /
*                          → 404 NotFound
```

---

## Productos y servicios

### Basicos
| Slug | Nombre | Descripcion corta |
|------|--------|------------------|
| `ai-data` | AI Data | Consulta datos internos (Excel, CRM, ERP) en lenguaje natural |
| `generative-ai` | IA Generativa | Generacion de contenido y conocimiento a escala |
| `automation` | Automatizacion | Eliminar tareas repetitivas y orquestar workflows |
| `agents` | Agentes de IA | Asistentes conversacionales que deciden y operan |

### Premium
| Slug | Nombre | Descripcion corta |
|------|--------|------------------|
| `decision-copilot` | Copiloto de Decisiones | Soporte a decisiones basado en datos, predicciones y recomendaciones |
| `social-ai` | IA para Infraestructura Social | IA para ONGs y organizaciones sociales |
| `autonomous-agents` | Agentes Autonomos | Ejecucion automatizada de tareas y procesos completos |

---

## Proceso (metodologia de 4 pasos)

1. **Entendimiento** — `/proceso/entendimiento` — Diagnostico del negocio, datos y objetivos
2. **Diseno** — `/proceso/diseno` — Diseño de la solucion y roadmap
3. **Construccion** — `/proceso/construccion` — Build, integracion y deploy
4. **Escala** — `/proceso/escala` — Medicion, iteracion y expansion

---

## Sistema de i18n

- **Idiomas soportados:** `"es"` (default) | `"en"`
- **Provider:** `LanguageProvider` en `main.tsx`
- **Hook:** `useLang()` → devuelve `{ lang, setLang, t }`
- **Funcion `t`:** `t(textoEspanol, textoIngles)` — retorna el string segun idioma activo
- **Switch de idioma:** componente `LangSwitch` en el navbar (botones ES / EN)
- **Estado:** no persistido (se resetea en cada carga a `"es"`)

---

## Componentes globales (presentes en todas las paginas)

### SiteLayout (`src/components/layout/SiteLayout.tsx`)
Layout raiz. Envuelve todo con:
- `SiteNavbar` — fija en top, blur backdrop, logo + links + LangSwitch + CTA
- `AnimatePresence` + `motion.main` — transicion de pagina (fade+slide, 350ms)
- `SiteFooter`
- `WhatsAppButton` — boton fijo bottom-right
- `PampaiAssistant` — chatbot flotante bottom-right (encima del WhatsApp)
- `useEffect` que hace scroll al top en cada cambio de ruta

### SiteNavbar (`src/components/layout/SiteNavbar.tsx`)
- Logo: imagen circular `pampai-logo.jpeg` + texto "Pampai"
- Links: Productos, Proceso, Casos de uso, Pricing, Impacto social, Contacto
- CTA: boton "Agendar demo" → `/contacto`
- Mobile: menu hamburguesa con animacion
- `NavLink` marca el item activo si `isActive` o si `pathname.startsWith(item.to + "/")`

---

## Templates de paginas reutilizables (`src/components/PageLayouts.tsx`)

### `ProductPageLayout`
Props: `eyebrow`, `title`, `subtitle`, `problem`, `solution`, `howItWorks[]`, `useCases[]`, `benefits[]`, `image?`

Estructura de la pagina:
1. Breadcrumb "Volver a productos"
2. Hero banner con imagen de fondo opcional
3. Grid 2 col: "El problema" | "Nuestra solucion"
4. Lista numerada: "Como funciona" (pasos)
5. Grid: "Casos de uso"
6. Lista: "Beneficios"
7. CTA final: "Agendar demo" + WhatsApp

### `ProcessPageLayout`
Props: `step`, `title`, `subtitle`, `whatWeDo`, `whatClientBrings`, `deliverables[]`, `duration`, `next?`

Estructura:
1. Breadcrumb "Volver al proceso"
2. Hero banner
3. Grid 2 col: "Que hacemos" | "Que aporta el cliente"
4. Lista: "Entregables"
5. "Tiempo estimado"
6. Footer CTA con link al siguiente paso + "Agendar demo"

---

## Secciones del Home (`src/pages/Home.tsx`)

| Componente | Descripcion |
|-----------|-------------|
| `Hero` | Video de fondo (Pexels), efecto typewriter en el titulo, parallax scroll, CTA "Agendar demo" + "Explorar soluciones" |
| `Stats` | 4 counters animados: 200+ proyectos, 98% satisfaccion, 50+ empresas, 3x ROI |
| `Showcase` | Cards con imagen de las 3 soluciones principales + 3 premium (hover con scale) |
| `ResultsChart` | BarChart (Recharts) con mejora de eficiencia por sector (Retail, Salud, Finanzas, Logistica, RRHH) |
| `ProcessVideo` | Video explicativo del proceso con 3 pasos resumidos |
| `SocialImpactPreview` | Banner de impacto social con CTA a `/impacto-social` |
| `FinalStrip` | CTA final grande: "Empeza tu proyecto de IA hoy" |

Animaciones del Home:
- `useTypewriter(text, speed)` — custom hook para el titulo del hero
- `Counter` — IntersectionObserver + requestAnimationFrame para counters al hacer scroll
- Parallax del hero: `useScroll` + `useTransform` de Framer Motion

---

## Chatbot: Pampai Assistant (`src/components/PampaiAssistant.tsx`)

- **Trigger:** boton flotante violeta, bottom-right, posicion `bottom-24 right-6`
- **Panel:** `380px` ancho, `560px` alto, esquinas redondeadas, `AnimatePresence`
- **Quick replies:** 5 sugerencias predefinidas en ES y EN
- **Flujo:**
  1. Usuario escribe o selecciona quick reply
  2. `supabase.functions.invoke("chat", { body: { messages, language } })`
  3. Edge Function llama a Lovable AI Gateway → Gemini 3 Flash
  4. Respuesta mostrada como burbuja del asistente
- **Footer del chat:** links rapidos "Agendar demo" y "WhatsApp"
- **Errores:** rate limit (429), sin creditos (402), error generico

### Edge Function `supabase/functions/chat/index.ts`
- Runtime: Deno
- Env var requerida: `LOVABLE_API_KEY`
- Endpoint externo: `https://ai.gateway.lovable.dev/v1/chat/completions`
- Modelo: `google/gemini-3-flash-preview`
- System prompt incluye routing de productos por keywords
- CORS habilitado para todos los origenes (`*`)

---

## Base de datos Supabase

**Project ID:** `hoaraatxovvyqsrgbcyt` (proyecto original en Lovable — en proceso de migracion a cuenta Supabase propia de la empresa)

### Tablas

#### `contact_submissions`
| Campo | Tipo | Notas |
|-------|------|-------|
| id | uuid PK | auto |
| name | text | requerido |
| email | text | requerido |
| phone | text | nullable |
| company | text | nullable |
| message | text | requerido |
| solution_type | text | nullable |
| source | text | default |
| preferred_lang | text | default |
| created_at | timestamp | auto |

RLS: INSERT publico (cualquiera puede enviar)

#### `services`
| Campo | Tipo |
|-------|------|
| id | uuid PK |
| title_es / title_en | text |
| description_es / description_en | text |
| icon | text |
| display_order | int |
| is_active | boolean |
| created_at / updated_at | timestamp |

RLS: SELECT publico solo `is_active = true`

#### `use_cases`
Misma estructura que `services` + campos nullable en descriptions.

#### `testimonials`
| Campo extra | Tipo |
|------------|------|
| client_name | text |
| company | text nullable |
| role | text nullable |
| quote_es / quote_en | text |
| avatar_url | text nullable |

RLS: SELECT publico solo `is_active = true`

#### `newsletter_subscribers`
| Campo | Tipo |
|-------|------|
| email | text UNIQUE |
| preferred_lang | text |
| is_subscribed | boolean |

RLS: INSERT publico

---

## Design System

### Colores (dark mode, CSS custom properties en `index.css`)
| Token | Valor | Uso |
|-------|-------|-----|
| `--background` | `240 22% 5%` (`#0a0a0f`) | Fondo global |
| `--bg-elevated` | `240 18% 9%` (`#12121a`) | Cards elevadas |
| `--bg-card` | `240 16% 11%` (`#161620`) | Cards normales |
| `--primary` | `252 100% 68%` (`#7c5cff`) | Violeta — acciones principales |
| `--teal` | `172 66% 50%` (`#2dd4bf`) | Acento teal — iconos, badges |
| `--foreground` | `0 0% 100%` | Texto principal |
| `--ink-muted` | aprox `240 8% 68%` | Texto secundario |

### Gradientes (clases Tailwind custom)
- `bg-pampai-gradient` — violeta a teal (botones principales, burbujas del chat)
- `bg-pampai-gradient-soft` — version suave/translucida (fondos de secciones)

### Tipografias
- **Display / headings:** `font-serif-display` → Instrument Serif
- **Body:** Inter
- **Mono / badges:** `font-mono-tech` → JetBrains Mono

### Bordes
- `border-soft` — borde muy tenue
- `border-strong` — borde mas visible

---

## Contacto y canales externos

- **WhatsApp:** `+5491144390930` / `https://wa.me/5491144390930`
- **CTA principal:** `/contacto` — "Agendar demo"

---

## Build y deploy

- **Dev:** `vite dev`
- **Build:** `vite build` → output en `/dist`
- **Hosting:** Hostinger (servidor Apache — `.htaccess` en `/public` para SPA routing)
- **Repositorio Git:** https://github.com/marianoisabello/Pagina-Web.git (cuenta GitHub empresa)
- **Deploy:** manual por ahora — objetivo: automatizar via GitHub Actions + FTP a Hostinger
- **Variables de entorno (frontend):**
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_PUBLISHABLE_KEY`
- **Variables de entorno (Edge Function):**
  - `LOVABLE_API_KEY`

### Flujo para hacer cambios en la pagina

1. Editar el codigo localmente
2. Correr `npm run build` para generar `/dist`
3. Subir el contenido de `/dist` a Hostinger via File Manager o FTP (reemplazar archivos anteriores)
4. (Opcional) Hacer commit al repo Git para guardar historial:
   ```bash
   git add .
   git commit -m "descripcion del cambio"
   git push
   ```

---

## Patrones de codigo importantes

### Como agregar una nueva pagina de producto
1. Crear `src/pages/products/NuevoProducto.tsx`
2. Usar `ProductPageLayout` de `@/components/PageLayouts`
3. Agregar ruta en `App.tsx`: `<Route path="/productos/nuevo-producto" element={<NuevoProducto />} />`
4. Agregar card en `Showcase` en `Home.tsx` y en `Productos.tsx`
5. Agregar keyword routing en `supabase/functions/chat/index.ts`

### Como agregar texto bilingue
```tsx
const { t } = useLang();
// Uso:
t("Texto en espanol", "English text")
// Retorna string segun idioma activo
```

### Como hacer una query a Supabase
```tsx
import { supabase } from "@/integrations/supabase/client";
const { data, error } = await supabase.from("services").select("*").eq("is_active", true);
```

### Como invocar una Edge Function
```tsx
const { data, error } = await supabase.functions.invoke("nombre-funcion", {
  body: { param: value },
});
```
