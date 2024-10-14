import { Tabs } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons'

import { useTheme } from '@rneui/themed'

const Navigation = () => {
  const { theme } = useTheme()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.colors.backgroundInverse },
        // tabBarShowLabel: false,
        // tabBarLabelStyle: styles.tabBarLabel,
        tabBarInactiveTintColor: theme.colors.neutral60,
        // tabBarInactiveTintColor: theme.colors.background,
        tabBarActiveTintColor: theme.colors.textOnBackground.inverse,
        // tabBarStyle: styles.tabBar,
      }}
    >
      {/* TODO Bug when navigating from this screen to other screens on Android. Caused by not loading fonts? */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <FontAwesome5 name="map" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="demo"
        options={{
          title: 'List',
          tabBarIcon: ({ color }) => <FontAwesome5 name="list-ul" size={24} color={color} />,
        }}
      />
      {/* <Tabs.Screen
        name="Explore"
        component={DemoScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="globe-europe" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Passport"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="passport" size={24} color={color} />,
        }}
      /> */}
    </Tabs>
  )
}

export default Navigation
