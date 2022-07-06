export const QUANTITY_VARIANTS = [3, 5, 10];

export const SEARCH_VARIANTS = {
  all: 'all',
  text: 'text',
  title: 'title',
  author: 'author',
  tags: 'tags',
};

export const SEARCH_OPTIONS = {
  all: {
    id: SEARCH_VARIANTS.all,
    label: 'Всем значениям',
    fields: ['text', 'title', 'author.login', 'tags'],
  },
  text: { id: 'text', label: 'Тексту', fields: ['text'] },
  title: { id: 'title', label: 'Заголовку', fields: ['title'] },
  author: { id: 'author', label: 'Автору', fields: ['author.login'] },
  tags: { id: 'tags', label: 'Тегам', fields: ['tags'] },
};
