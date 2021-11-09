import React from 'react';
import styled from 'styled-components/macro';

import {
    MAIN_STORY,
    OPINION_STORIES,
    SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from "../../constants";

const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryList>
                    {SECONDARY_STORIES.map((story, index) => (
                        <SecondaryStoryWrapper key={story.id}>
                            <SecondaryStory {...story} />
                        </SecondaryStoryWrapper>
                    ))}
                </StoryList>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <OpinionList>
                    {OPINION_STORIES.map((story, index) => (
                        <OpinionWrapper key={story.id}>
                            <OpinionStory key={story.id} {...story} />
                        </OpinionWrapper>
                    ))}
                </OpinionList>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement/>
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    gap: 48px 0;
  }
  
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  
  @media ${QUERIES.tabletAndUp} {
    margin-right: 16px;
    padding-right: 16px;
    border-right: solid 1px var(--color-gray-300)
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  
  @media ${QUERIES.laptopAndUp} {
    margin-right: 16px;
    padding-right: 16px;
    border-right: solid 1px var(--color-gray-300)
  }
`;

const SecondaryStoryWrapper = styled.div`
  :not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
`

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const OpinionList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-auto-flow: column;
    gap: 0 32px;
  }
`;

const OpinionWrapper = styled(SecondaryStoryWrapper)`
  :not(:last-of-type) {
    @media ${QUERIES.tabletOnly} {
      padding-bottom: 0;
      border-bottom: none;
    }
  }
`


const AdvertisementSection = styled.section`
  grid-area: advertisement;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--color-gray-300);
`;

export default MainStoryGrid;
