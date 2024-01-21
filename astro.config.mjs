import { defineConfig } from 'astro/config';
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/mixin/_breakpoint.scss";
                            @import "src/styles/mixin/_hover.scss";
                            @import "src/styles/mixin/_setting.scss";`,
        },
      },
    },
  },
});
