import { StyleSheet } from 'react-native'

export const theme = StyleSheet.create({
  colors: {
    primary: '#4A90E2',       // 主要按鈕顏色
    background: '#F5F6FA',    // 背景色
    cardBg: '#FFFFFF',        // 卡片背景
    text: '#2C3E50',         // 主要文字顏色
    secondaryText: '#7F8C8D', // 次要文字顏色
    border: '#E2E8F0',       // 邊框顏色
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
  },
  fontSize: {
    small: 14,
    medium: 16,
    large: 18,
    xlarge: 24,
  },
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    }
  }
});