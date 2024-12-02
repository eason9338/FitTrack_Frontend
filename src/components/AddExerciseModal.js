// AddExerciseModal.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import { layout, typography, buttonStyles, formStyles } from '../styles';

const AddExerciseModal = ({ visible, onClose, onAdd }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('chest');
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/exercise/categories');
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error('Failed to fetch categories', error);
        Alert.alert('錯誤', '拿取健身種類時發生錯誤');
      }
    };
  
    fetchCategories();
  }, [visible]);

  const fetchExercises = async (category) => {
    try {
      const id = category.id;
      setSelectedCategory(id);
      const response = await fetch(`http://localhost:3000/api/exercise/category/${id}`);
      const data = await response.json();
      setExercises(data.data);
    } catch (error) {
      console.error('Error fetching exercises:', error);
      Alert.alert('Error', 'Failed to fetch exercises');
    }
  };

  const renderCategoryButton = ({ item }) => (
    <TouchableOpacity 
      style={[
        buttonStyles.categoryButton,
        selectedCategory === item && buttonStyles.categoryButtonActive
      ]}
      onPress={() => fetchExercises(item)}
    >
      <Text style={[
        typography.categoryButtonText,
        selectedCategory === item && typography.categoryButtonTextActive
      ]}>
        {item.zh}
      </Text>
    </TouchableOpacity>
  );

  const renderExerciseItem = ({ item }) => (
    <TouchableOpacity 
      style={layout.exerciseListItem}
      onPress={() => onAdd(item.name)}  
    >
      <View>
        <Text style={typography.exerciseItemTitle}>{item.name}</Text>
        <Text style={typography.exerciseItemDescription}>{item.description}</Text>
        <View style={layout.tagContainer}>
          {item.targetMuscles.map((muscle, index) => (
            <Text key={index} style={typography.exerciseItemTag}>
              {muscle}{index < item.targetMuscles.length - 1 ? ', ' : ''}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={layout.modalBackground}>
        <View style={layout.modalContent}>
          <View style={layout.modalHeader}>
            <TouchableOpacity onPress={onClose}>
              <Text style={typography.modalButtonText}>取消</Text>
            </TouchableOpacity>
            <Text style={typography.modalTitle}>新增動作</Text>
            <TouchableOpacity>
              <Text style={typography.modalButtonTextPrimary}>完成</Text>
            </TouchableOpacity>
          </View>

          <View style={layout.searchContainer}>
            <TextInput 
              style={formStyles.searchInput}
              placeholder="搜尋動作"
            />
          </View>

          <View style={layout.categoriesContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={renderCategoryButton}
              keyExtractor={item => item.id.toString()}
            />
          </View>

          <FlatList
            style={layout.exerciseList}
            data={exercises}
            renderItem={renderExerciseItem}
            keyExtractor={item => item._id}
            ItemSeparatorComponent={() => <View style={layout.separator} />}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddExerciseModal;