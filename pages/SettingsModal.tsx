import React from 'react';
import { TouchableOpacity, Text, ScrollView, View, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { accueilStyles } from '../styles/Acceuil';
import { platformOptions, categoryOptions } from '../services/constants';

interface SettingsModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  tempSelectedPlatform: string;
  selectedCategory: string;
  handlePlatformChange: (platform: string) => void;
  handleCategoryChange: (category: string) => void;
  handleFinishSelection: () => void;
  onCategorySelected: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  modalVisible,
  setModalVisible,
  tempSelectedPlatform,
  selectedCategory,
  handlePlatformChange,
  handleCategoryChange,
  handleFinishSelection,
  onCategorySelected,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={accueilStyles.modalContainer}>
        <View style={accueilStyles.modalContent}>
          <View style={accueilStyles.modalHeader}>
            <Text style={accueilStyles.modalTitle}>Les Platforms</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={accueilStyles.closeButton}>
              <FontAwesome name="times-circle" size={20} color="black" style={accueilStyles.closeButtonIcon} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={accueilStyles.buttonContainer}>
              {platformOptions.map((platform, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePlatformChange(platform)}
                  style={{
                    paddingVertical: 10,
                    marginRight: 10,
                    paddingHorizontal: 20,
                    backgroundColor: tempSelectedPlatform === platform ? 'blue' : 'lightblue',
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: tempSelectedPlatform === platform ? 'white' : 'black' }}>
                    {platform === 'all' ? 'ALL' : platform.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <Text style={accueilStyles.modalTitle}>Les Catégories</Text>
          <ScrollView>
            <View style={accueilStyles.buttonContainer}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                {categoryOptions.map((category, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleCategoryChange(category)}
                    style={{
                      padding: 10,
                      margin: 5,
                      backgroundColor: selectedCategory === category ? 'blue' : 'lightblue',
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: selectedCategory === category ? 'white' : 'black' }}>
                      {category.toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity onPress={handleFinishSelection} style={accueilStyles.terminerButton}>
            <Text style={accueilStyles.terminerTitle}>Terminer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;
