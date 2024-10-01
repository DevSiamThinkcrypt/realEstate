'use client';
import { ReusableBanner, Banner, Slider, TwoColumnText } from '@/components';
import React, { useState } from 'react';

import Team from '@/components/about-us-page/sections/team/Team';
import { valueAdditionTeamData } from '@/lib/data/valueAdditionData';
import PageLayout from '@/components/layout/PageLayout';
import { sliderDataWithoutContent } from '@/lib/data/solutionPageData';
import { useGetContentsQuery } from '@/store/services/contentApi';
import Loader from '@/components/util/loader/Loader';
import { serviceExpertData } from '@/lib/data/serviceData';
import { Box, Flex, Grid, Text, Select } from '@chakra-ui/react';
import PropertyLayout from '@/components/property/PropertyLayout';
import { propertyData } from '@/lib/data/propertyData';
import { fonts } from '@/lib/config/constants';

const ValuePage = () => {
//   const [selectedSize, setSelectedSize] = useState('All');
  const [activeTab, setActiveTab] = useState('All');
  const { data, isLoading, isError } = useGetContentsQuery({});

//   FILTER SELECT BOX
//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedSize(event.target.value);
//   };

  const tabs = [
    { label: 'All', value: 'All' },
    { label: 'Commercial', value: 'Commercial' },
    { label: 'Ongoing', value: 'Ongoing' },
    { label: 'Under Construction', value: 'Under Construction' },
  ];

  const filterProperties = () => {
    if (activeTab === 'All') return propertyData;

    return propertyData.filter(property => property.status === activeTab);
  };

  const filteredProperties = filterProperties();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageLayout variant="solid">
      {/* Banner */}
      <Banner text="Commercial Property Services" imgSrc="./image/property_banner_a1.jpg" />
      
      <Box mt="5rem" mb="2rem" p={{ base: '8px 20px', xl: '10px 120px' }}>
        <Grid
          gridTemplateColumns="6fr 1fr"
          alignItems="center"
          borderBottom="1px solid"
          borderColor="overlay.200"
          paddingBottom={{ base: '10px', md: '20px' }}
        >
          <Flex gap="1rem" alignItems="center">
            {tabs.map(tab => (
              <Text
                key={tab.value}
                bg={activeTab === tab.value ? '#621191' : 'white'}
                color={activeTab === tab.value ? 'white' : 'black'}
                shadow="md"
                fontWeight="500"
                cursor="pointer"
                px="1.3rem"
                py="0.7rem"
                rounded="lg"
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </Text>
            ))}
          </Flex>

          <Select
            fontFamily={fonts.text}
            placeholder="Filter"
            size="md"
            // value={selectedSize}
            // onChange={handleSelectChange}
            right="35px"
          >
            <option value="location">Location</option>
            <option value="price">Price</option>
          </Select>
        </Grid>
      </Box>

      <Box mb={{ base: '2rem', sm: '6rem' }}>
        {filteredProperties.map((property, index) => (
          <PropertyLayout key={index} data={property} oddOrder={index % 2 === 1} />
        ))}
      </Box>
    </PageLayout>
  );
};

export default ValuePage;
