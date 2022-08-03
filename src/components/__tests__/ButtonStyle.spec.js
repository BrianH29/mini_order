import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ButtonStyle from '../Atom/ButtonStyle.vue';

describe('ButtonStyle', () => {
  it('renders properly', () => {
    const wrapper = mount(ButtonStyle, {
      props: { title: 'Its Button', idx: 2 },
    });
    expect(wrapper.text()).toContain('Its Button');
  });
});
