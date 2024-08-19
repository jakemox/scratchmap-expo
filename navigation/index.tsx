import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import MapScreen from '../screens/MapScreen'
import DemoScreen from '../screens/DemoScreen'
import { useTheme } from '@rneui/themed'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  const { theme } = useTheme()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // tabBarShowLabel: false,
          // tabBarLabelStyle: styles.tabBarLabel,
          // TODO Color from theme
          tabBarInactiveTintColor: '#B3B1AB',
          tabBarActiveTintColor: theme.colors.primary,
          // tabBarStyle: styles.tabBar,
        }}
      >
        {/* Bug when navigating from this screen to other screens on Android. Caused by not loading fonts? */}
        <Tab.Screen
          name='Map'
          component={MapScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name='map' size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='List'
          component={DemoScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name='list-ul' size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Explore'
          component={DemoScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name='globe-europe' size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Passport'
          component={MapScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name='passport' size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
