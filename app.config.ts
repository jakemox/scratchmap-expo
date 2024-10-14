import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'scratchmap-expo',
  slug: 'scratchmap-expo',
  plugins: [
    [
      'expo-build-properties',
      {
        ios: {
          newArchEnabled: true,
        },
        android: {
          newArchEnabled: true,
        },
      },
    ],
    [
      '@rnmapbox/maps',
      {
        RNMapboxMapsDownloadToken: process.env.MAPBOX_SECRET_KEY || '',
      },
    ],
  ],
})
