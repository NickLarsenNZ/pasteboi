import { shallowMount } from '@vue/test-utils'
import Label from '@/components/Label.vue'

// Relevant docs:
// https://vue-test-utils.vuejs.org/guides/dom-events.html
// https://lmiller1990.github.io/vue-testing-handbook/testing-emitted-events.html#write-a-component-and-test

describe('Label.vue', () => {
    it('renders props.text', () => {
        const text = 'new message'
        const wrapper = shallowMount(Label, {
            propsData: { text }
        })
        expect(wrapper.text()).toMatch(text)
    })

    it('emits copy event on click', () => {
        const text = 'word'
        const wrapper = shallowMount(Label, {
            propsData: { text }
        })

        wrapper.trigger('click')

        expect(wrapper.emitted('copy')![0]).toEqual([text])
    })

    it('emits delete event on click', () => {
        const text = 'word'
        const wrapper = shallowMount(Label, {
            propsData: { text }
        })

        // https://vue-test-utils.vuejs.org/guides/dom-events.html
        wrapper.find('.delete').trigger('click')

        expect(wrapper.emitted('delete')![0]).toEqual([text])
    })
})
