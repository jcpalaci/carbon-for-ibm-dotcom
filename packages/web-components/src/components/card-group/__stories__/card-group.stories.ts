/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit-element';
import ArrowRight20 from 'carbon-web-components/es/icons/arrow--right/20';
import { number } from '@storybook/addon-knobs';
import readme from './README.stories.mdx';
import '../../card/card-eyebrow';
import '../../card/card-heading';
import '../card-group';
import '../card-group-item';

const defaultCardGroupItem = html`
  <dds-card-group-item href="https://example.com">
    <dds-card-heading>Nunc convallis lobortis</dds-card-heading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit.
      Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
    </p>
    <dds-card-footer slot="footer">
      ${ArrowRight20({ slot: 'icon' })}
    </dds-card-footer>
  </dds-card-group-item>
`;

const cardGroupItemWithImages = html`
  <dds-card-group-item href="https://example.com">
    <dds-image
      slot="image"
      alt="Image alt text"
      default-src="https://fpoimg.com/1056x792?text=4:3&amp;bg_color=ee5396&amp;text_color=161616"
    >
    </dds-image>
    <dds-card-eyebrow>Topic</dds-card-eyebrow>
    <dds-card-heading>Natural Language Processing.</dds-card-heading>
    <dds-card-footer slot="footer">
      ${ArrowRight20({ slot: 'icon' })}
    </dds-card-footer>
  </dds-card-group-item>
`;

export const Default = ({ parameters }) => {
  const { cards } = parameters?.props?.CardGroup ?? {};
  return html`
    <dds-card-group>${cards}</dds-card-group>
  `;
};

export const withCTA = ({ parameters }) => {
  const { cards } = parameters?.props?.CardGroup ?? {};
  return html`
    <dds-card-group>
      ${cards}
      <dds-card-group-item href="https://example.com" color-scheme="inverse">
        <dds-card-heading>Top level card link</dds-card-heading>
        <dds-card-footer slot="footer" color-scheme="inverse">
          ${ArrowRight20({ slot: 'icon' })}
        </dds-card-footer>
      </dds-card-group-item>
    </dds-card-group>
  `;
};

export const withImages = ({ parameters }) => {
  const { cards } = parameters?.props?.CardGroup ?? {};
  return html`
    <dds-card-group>${cards}</dds-card-group>
  `;
};

withImages.story = {
  parameters: {
    ...readme.parameters,
    knobs: {
      CardGroup: ({ groupId }) => ({
        cards: Array.from({
          length: number('Number of cards', 5, {}, groupId),
        }).map(() => cardGroupItemWithImages),
      }),
    },
  },
};

export const withImagesAndCTA = ({ parameters }) => {
  const { cards } = parameters?.props?.CardGroup ?? {};
  return html`
    <dds-card-group>
      ${cards}
      <dds-card-group-item href="https://example.com" color-scheme="inverse">
        <dds-card-heading>Top level card link</dds-card-heading>
        <dds-card-footer slot="footer" color-scheme="inverse">
          ${ArrowRight20({ slot: 'icon' })}
        </dds-card-footer>
      </dds-card-group-item>
    </dds-card-group>
  `;
};

withImagesAndCTA.story = {
  parameters: {
    ...readme.parameters,
    knobs: {
      CardGroup: ({ groupId }) => ({
        cards: Array.from({
          length: number('Number of cards', 5, {}, groupId),
        }).map(() => cardGroupItemWithImages),
      }),
    },
  },
};

export default {
  title: 'Components/Card Group',
  parameters: {
    ...readme.parameters,
    hasCardGroupStandalone: true,
    knobs: {
      CardGroup: ({ groupId }) => ({
        cards: Array.from({
          length: number('Number of cards', 5, {}, groupId),
        }).map(() => defaultCardGroupItem),
      }),
    },
  },
};
