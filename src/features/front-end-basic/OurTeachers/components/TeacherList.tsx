import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Box } from '@mui/material';
import { SwiperWrapper } from 'src/common/components';
import { useVariantSwiper } from 'src/common/hooks';
import { TeacherCard } from '../../../../common/components/TeachersCard/TeacherCard';
import { ITeacher } from 'src/common/components/TeachersCard';

interface Props {
  teachers: ITeacher[];
}

export const TeacherList = ({ teachers }: Props) => {
  const { sx, swiperOptions } = useVariantSwiper('teachers');
  return (
    <SwiperWrapper sx={sx}>
      <Swiper className="mySwiper" {...swiperOptions}>
        {teachers.map(it => (
          <SwiperSlide key={it.id}>
            <Link href={`/teachers#teacher-${it.id}`}>
              <Box
                component="a"
                href={`/teachers#teacher${it.id}`}
                sx={{ display: 'block', height: '100%' }}
              >
                <TeacherCard teacher={it} />
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};
