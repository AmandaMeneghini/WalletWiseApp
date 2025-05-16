import React, { useState } from 'react';
import { Animated, Dimensions, Platform, View, Easing } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import { styles } from './style';

const useNativeDriver = Platform.OS !== 'web';

const AnimatedBootSplash = ({ onAnimationEnd }) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [logoTranslateY] = useState(() => new Animated.Value(0));
  const [textOpacity] = useState(() => new Animated.Value(0));
  const [textTranslateY] = useState(() => new Animated.Value(20));

  const { height: screenHeight } = Dimensions.get('window');

  const { container, logo } = BootSplash.useHideAnimation({
    manifest: require('../../../assets/bootsplash/manifest.json'),
    logo: require('../../../assets/bootsplash/logo.png'),

    animate: () => {
      const logoHeight = logo.style.height || 100;

      const logoUpAnimation = Animated.spring(logoTranslateY, {
        toValue: -50,
        friction: 5,
        tension: 40,
        useNativeDriver,
      });

      const logoDownAnimation = Animated.spring(logoTranslateY, {
        toValue: screenHeight + (logoHeight / 2),
        friction: 8,
        tension: 25,
        overshootClamping: true,
        useNativeDriver,
      });

      const textAppearAnimation = Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 250,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver,
        }),
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 250,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver,
        }),
      ]);

      const splashFadeOutAnimation = Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver,
      });

      Animated.sequence([
        logoUpAnimation,
        Animated.parallel([
          logoDownAnimation,
          Animated.sequence([
            textAppearAnimation,
          ]),
        ]),
        Animated.delay(800),
        splashFadeOutAnimation,
      ]).start(() => {
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, { opacity }]}>
      <View style={styles.centered}>
        <Animated.Image
          {...logo}
          style={[logo.style, { transform: [{ translateY: logoTranslateY }] }]}
        />
        <Animated.Text
          style={[
            styles.text,
            {
              opacity: textOpacity,
              transform: [{ translateY: textTranslateY }],
            },
          ]}
        >
          Wallet Wise
        </Animated.Text>
      </View>
    </Animated.View>
  );
};

export default AnimatedBootSplash;