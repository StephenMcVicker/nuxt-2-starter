import { mount } from '@vue/test-utils';
import NuxtLogo from '@/components/Test.vue';

test('displays message', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = mount(NuxtLogo, {
    propsData: {
      message: 'Hello World'
    }
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello World');
});
