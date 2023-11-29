import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Switch } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingsPage = () => {
  const navigation = useNavigation();

  // State for toggle switches (example)
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);

  const settings = [
    { id: '1', title: 'Account', detailScreen: 'AccountSettings' },
    { id: '2', title: 'Upgrade Account', detailScreen: 'UpgradeAccount' },
    { id: '3', title: 'Mute', isSwitch: true, switchValue: isNotificationsEnabled, onSwitchChange: setNotificationsEnabled },
    // More settings...
  ];

  const onSettingPress = (setting) => {
    if (setting.detailScreen) {
      navigation.navigate(setting.detailScreen);
    }
  };

  const renderSetting = ({ item }) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={() => onSettingPress(item)}
      disabled={item.isSwitch}
    >
      <FontAwesome name="cog" size={24} color="white" />
      <View style={styles.settingText}>
        <Text style={styles.settingTitle}>{item.title}</Text>
        {item.isSwitch && (
          <Switch
            onValueChange={item.onSwitchChange}
            value={item.switchValue}
          />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <View>
        {settings.map((setting, index) => (
          <View key={setting.id}>
            {renderSetting({ item: setting })}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1c21',
  },
  header: {
    marginTop: 35,
    padding: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#303136',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#303136',
  },
  settingText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  settingTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

export default SettingsPage;
