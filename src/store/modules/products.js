import axios from 'axios';
import { checkSelectedItems } from '../../js/utils';

export default {
  state: {
    productsList: null,
    isLoading: false,
    isResetVisible: false,
    minPrice: '',
    maxPrice: '',
    filters: {
      area: [
        {
          value: 0.63,
          selected: false,
        },
        {
          value: 0.9,
          selected: false,
        },
        {
          value: 1.13,
          selected: false,
        },
        {
          value: 1.56,
          selected: false,
        },
        {
          value: 2.56,
          selected: false,
        },
        {
          value: 2.88,
          selected: false,
        },
      ],
      equipment: [
        {
          value: 'empty',
          title: 'Пустой номер',
          selected: false,
        },
        {
          value: 'bad',
          title: 'Лежак',
          selected: false,
        },
        {
          value: 'claw',
          title: 'Когтеточка',
          selected: false,
        },
        {
          value: 'game',
          title: 'Игровой комплекс',
          selected: false,
        },
        {
          value: 'house',
          title: 'Домик',
          selected: false,
        },
      ],
    },
  },
  mutations: {
    setProducts: (state, payload) => {
      const { minPrice, maxPrice } = state;
      let products = payload;

      if (minPrice > 0) {
        products = products.filter((item) => {
          return item.price >= +minPrice;
        });
        state.isResetVisible = true;
      }

      if (maxPrice > 0) {
        products = products.filter((item) => {
          return item.price <= +maxPrice;
        });
        state.isResetVisible = true;
      }

      const areaSelected = [];
      const equipSelected = [];

      checkSelectedItems(state.filters.area, areaSelected);
      checkSelectedItems(state.filters.equipment, equipSelected);

      if (areaSelected.length) {
        products = products.filter((product) => {
          return areaSelected.find((item) => {
            return product.area.includes(item);
          });
        });
        state.isResetVisible = true;
      }

      if (equipSelected.length) {
        const selectedProducts = [];

        products.forEach((product) => {
          const productContainsFilter = (filter) => {
            return product.equipment.indexOf(filter) != -1;
          };
          if (equipSelected.every(productContainsFilter)) {
            selectedProducts.push(product);
          }
        });

        products = selectedProducts;
        state.isResetVisible = true;
      }

      state.productsList = products;
    },
    setLoading: (state, payload) => {
      state.isLoading = payload;
    },
    setMinPrice: (state, payload) => {
      state.minPrice = payload;
    },
    setMaxPrice: (state, payload) => {
      state.maxPrice = payload;
    },
    setFilterAreaCheckbox: (state, payload) => {
      const list = state.filters.area;
      const index = list.findIndex((item) => item.value === payload);
      list[index].selected = !list[index].selected;
    },
    setFilterEquipCheckbox: (state, payload) => {
      const list = state.filters.equipment;
      const index = list.findIndex((item) => item.value === payload);
      list[index].selected = !list[index].selected;
    },
    setFiltersReset: (state, payload) => {
      state.maxPrice = '';
      state.minPrice = '';
      state.filters.area.forEach((item) => {
        item.selected = false;
      });
      state.filters.equipment.forEach((item) => {
        item.selected = false;
      });
      state.isResetVisible = false;
    },
  },
  actions: {
    getProducts({ commit }) {
      commit('setLoading', true);
      return axios
        .get('/data/products.json')
        .then((res) => {
          commit('setProducts', res.data);
          commit('setLoading', false);
        })
        .catch((e) => console.log(e));
    },
  },
};
