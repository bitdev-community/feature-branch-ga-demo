import { ReactEnv } from '@teambit/react.react-env';
import { ReactPreview } from '@teambit/preview.react-preview';
import { EnvHandler } from '@teambit/envs';
import { Preview } from '@teambit/preview';

export class MyReactEnv extends ReactEnv {
  name = 'react-env';
  icon = 'https://static.bit.dev/extensions-icons/react.svg';

  preview(): EnvHandler<Preview> {
    return ReactPreview.from({
      docsTemplate: require.resolve('./preview/docs'),
      mounter: require.resolve('./preview/mounter'),
      hostDependencies: [
        '@teambit/mdx.ui.mdx-scope-context',
        '@mdx-js/react',
        'react',
        'react-dom',
        '@showoff/design.theme.theme-provider',
        '@showoff/personal-portfolio.theme.light-portfolio-theme',
        '@showoff/personal-portfolio.theme.dark-portfolio-theme',
        '@showoff/design.theme.theme-toggle',
        '@mui/material',
        '@mui/icons-material',
        '@mui/lab',
      ],
    });
  }

  build() {
    return super.build();
  }
}

export default new MyReactEnv();