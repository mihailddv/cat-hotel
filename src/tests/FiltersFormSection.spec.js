import { mount } from '@vue/test-utils';
import FiltersFormSection from '@Components/common/Filters/FiltersFormSection.vue';

test('FiltersFormSection slot', () => {
  const testContent = '<div>content</div>';
  const testPropsTitle = 'baz';

  const wrapper = mount(FiltersFormSection, {
    slots: {
      default: testContent,
    },
    propsData: {
      title: testPropsTitle,
    },
  });

  expect(wrapper.html()).toContain(testContent);
  expect(wrapper.props('title')).toBe(testPropsTitle);
});
