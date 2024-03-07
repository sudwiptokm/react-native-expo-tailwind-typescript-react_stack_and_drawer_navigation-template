import PrimaryButton from "@components/modular/molecular/buttons/PrimaryButton";
import PText from "@components/modular/molecular/texts/PText";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import PagerView from "react-native-pager-view";

import Logo from "../assets/images/zen_check.svg";

type Props = object;

/* Indicator */
const IndicatorBar = ({ activeCarousel }) => {
  return (
    <View className="flex-row justify-center gap-x-4">
      <View
        className={`w-7 h-2 rounded-full bg-gray-400 ${
          activeCarousel === 0 && "bg-white"
        } transition-colors ease-in`}
      />
      <View
        className={`w-7 h-2 rounded-full bg-gray-400 ${
          activeCarousel === 1 && "bg-white"
        } transition-colors ease-in`}
      />
      <View
        className={`w-7 h-2 rounded-full bg-gray-400 ${
          activeCarousel === 2 && "bg-white"
        } transition-colors ease-in`}
      />
    </View>
  );
};

const Index = (props: Props) => {
  const [activeCarousel, setActiveCarousel] = React.useState<number>(0);

  let timer: NodeJS.Timer;
  const pagerViewRef = React.useRef<PagerView>(null);

  // useEffect(() => {
  //   timer = setInterval(() => {
  //     setActiveCarousel((prev) => {
  //       if (prev === 2) {
  //         return 0;
  //       } else {
  //         return prev + 1;
  //       }
  //     });
  //   }, 3000);
  //   clearInterval(timer);
  // }, []);

  useEffect(() => {
    pagerViewRef.current?.setPage(activeCarousel);
  }, [activeCarousel]);

  return (
    <SafeAreaView className="flex-1">
      <PText className="text-center text-3xl font-bold mt-10">
        Welcome to ZenCheck
      </PText>
      <PText className="text-center mt-6">
        Please login or create new account to continue
      </PText>

      {/* Logo */}
      <View className="mt-10 justify-end items-center ">
        <Logo />
      </View>

      {/* Carousel */}
      <View className="flex-1 justify-center ">
        <PagerView
          style={{ flex: 0.5 }}
          initialPage={activeCarousel}
          onPageSelected={(e) => {
            setActiveCarousel(e.nativeEvent.position);
          }}
          ref={pagerViewRef}
        >
          <View className="flex-1 justify-center items-center" key="1">
            <PText className="text-center text-xl font-bold">
              Manage your tasks
            </PText>
            <PText className="text-center mt-6 text-nowrap">
              You can easily manage all of your daily tasks in DoMe for free
            </PText>
          </View>
          <View className="flex-1 justify-center items-center" key="2">
            <PText className="text-center text-xl font-bold">
              Create daily routine
            </PText>
            <PText className="text-center mt-6">
              In ZenCheck you can create your personalized routine to stay
              productive
            </PText>
          </View>
          <View className="flex-1 justify-center items-center" key="3">
            <PText className="text-center text-xl font-bold">
              Create daily routine
            </PText>
            <PText className="text-center mt-6">
              In ZenCheck you can create your personalized routine to stay
              productive
            </PText>
          </View>
        </PagerView>
      </View>
      <View className="flex-1 justify-between">
        <IndicatorBar activeCarousel={activeCarousel} />
        <View className="flex-row gap-x-4 items-center mb-6">
          <PrimaryButton
            title="Login"
            onPress={() => {
              clearTimeout(timer);
              router.push("auth/login");
            }}
            fullWidth
          />
          <PrimaryButton
            title="Register"
            onPress={() => {
              clearTimeout(timer);
              router.push("auth/register");
            }}
            fullWidth
            variant="outline"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
