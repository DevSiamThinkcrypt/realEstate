import React, { useState, useCallback, FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel';
import SectionContent from './SectionContent';
import { sections } from '@/lib/data/sectionData';

type SwiperContainerProps = {
	bannerDataArray: any;
};

const SwiperContainer: FC<SwiperContainerProps> = ({ bannerDataArray }) => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const handleSlideChange = useCallback((swiper: any) => {
		setActiveSlideIndex(swiper.activeIndex);
	}, []);

	return (
		<Swiper
			direction='vertical'
			effect='fade'
			loop={false}
			modules={[EffectFade, Mousewheel]}
			mousewheel={true}
			onSlideChange={handleSlideChange}
			style={{ height: '100vh' }}
		>
			{bannerDataArray.map((section: any, index: number) => (
				<SwiperSlide key={index}>
					<SectionContent
						title={section.title}
						subTitle={section.subTitle}
						btnText={section.btnText}
						horizontalText={section.horizontalText}
						imgSrc={section.imgSrc}
						vidSrc={section.vidSrc}
						bgColor={section.bgColor}
						color={section.color}
						isActive={index === activeSlideIndex} // Pass down active state
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperContainer;
