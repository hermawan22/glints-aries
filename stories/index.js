// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean, number, select,
} from '@storybook/addon-knobs';
import Provider from './Provider';

import StorybookStyle from '../src/Style/StorybookStyle';

import '../src/Style/GlobalStyle.css';

// Candidate
import IntroStory from './IntroStory';
import AccordionStory from './Display/AccordionStory';
import AlertStory from './General/AlertStory';
import BadgeStory from './General/BadgeStory';
import BlockquoteStory from './Display/BlockquoteStory';
import BrandStory from './General/BrandStory';
import BreadcrumbStory from './Navigation/BreadcrumbStory';
import ButtonStory from './General/ButtonStory';
import CheckboxStory from './Input/CheckboxStory';
import CollapsibleStory from './Display/CollapsibleStory';
import ColorStory from './Utilities/ColorStory';
import DeviceStory from './Utilities/DeviceStory';
import DividerStory from './General/DividerStory';
import DropdownStory from './Navigation/DropdownStory';
import DrawerStory from './Navigation/DrawerStory';
import GalleryStory from './Application/GalleryStory';
import GlintsContainerStory from './Utilities/GlintsContainerStory';
import HeadingStory from './General/HeadingStory';
import IconStory from './General/IconStory';
import InformationStory from './Application/InformationStory';
import JobCardStory from './Application/JobCardStory';
import JobOverviewStory from './Application/JobOverviewStory';
import LayoutStory from './Layout/LayoutStory';
import LoadingStory from './General/LoadingStory';
import ModalStory from './Display/ModalStory';
import OmniSearchStory from './Input/OmniSearchStory';
import PointingModalStory from './Display/PointingModalStory';
import PopoverStory from './Display/PopoverStory';
import ProfilePictureStory from './General/ProfilePictureStory';
import ProgressStory from './Display/ProgressStory';
import PsychedelicTextStory from './General/PsychedelicTextStory';
import RadioButtonStory from './Input/RadioButtonStory';
import SearchFilterStory from './Input/SearchFilterStory';
import SelectStory from './Input/SelectStory';
import SliderStory from './Display/SliderStory';
import StoryBookComponentStory from './Utilities/StoryBookComponentStory';
import SwipeableStory from './Display/SwipeableStory';
import SwitchStory from './Input/SwitchStory';
import TabsStory from './Display/TabsStory';
import TagStory from './General/TagStory';
import TextareaStory from './Input/TextareaStory';
import TextFieldStory from './Input/TextFieldStory';
import ToastStory from './Display/ToastStory';
import TooltipStory from './Display/TooltipStory';

// Employers
import EmployersBlockquoteStory from './Display/EmployersBlockquoteStory';

storiesOf('Introduction', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Getting started', () => <IntroStory />);

storiesOf('General', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Alert', () => <AlertStory />)
  .add('Badge', () => <BadgeStory />)
  .add('Brand', () => <BrandStory />)
  .add('Button', () => <ButtonStory />)
  .add('Divider', () => <DividerStory />)
  .add('Heading', () => <HeadingStory />)
  .add('Icon', () => <IconStory />)
  .add('Loading', () => <LoadingStory />)
  .add('Profile Picture', () => <ProfilePictureStory />)
  .add('Psychedelic Text', () => <PsychedelicTextStory />)
  .add('Tag', () => <TagStory />);

storiesOf('Layout', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Layout', () => <LayoutStory />);

storiesOf('Input', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Checkbox', () => <CheckboxStory />)
  .add('Omni Search', () => <OmniSearchStory />)
  .add('Radio Button', () => <RadioButtonStory />)
  .add('Search Filter', () => <SearchFilterStory />)
  .add('Select', () => <SelectStory />)
  .add('Switch', () => <SwitchStory />)
  .add('Textarea', () => <TextareaStory />)
  .add('Text Field', () => <TextFieldStory />);

storiesOf('Navigation', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Breadcrumb', () => <BreadcrumbStory />)
  .add('Drawer', () => <DrawerStory />)
  .add('Dropdown', () => <DropdownStory />);

storiesOf('Display', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Accordion', () => <AccordionStory />)
  .add('Blockquote', () => <BlockquoteStory />)
  .add('Collapsible', () => <CollapsibleStory />)
  .add('Employers Blockquote', () => <EmployersBlockquoteStory />)
  .add('Modal', () => <ModalStory />)
  .add('Pointing Modal', () => <PointingModalStory />)
  .add('Pop Over', () => <PopoverStory />)
  .add('Progress', () => <ProgressStory />)
  .add('Slider', () => <SliderStory />)
  .add('Swipeable', () => <SwipeableStory />)
  .add('Tabs', () => <TabsStory />)
  .add('Toast', () => <ToastStory />)
  .add('Tooltip', () => <TooltipStory />);

storiesOf('Application', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Gallery', () => <GalleryStory />)
  .add('Information', () => <InformationStory />)
  .add('Job Card', () => <JobCardStory />)
  .add('Job Overview', () => <JobOverviewStory />);

storiesOf('Utilities', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Colors', () => <ColorStory />)
  .add('Device Size', () => <DeviceStory />)
  .add('Glints Container', () => <GlintsContainerStory />)
  .add('Story Book Component', () => <StoryBookComponentStory />);
