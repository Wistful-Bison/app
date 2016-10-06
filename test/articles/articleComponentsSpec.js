import React from 'react';
import { shallow } from 'enzyme';

import articles from '../../client/mock/articleStubs';
import { ArticleListItems } from '../../client/components/Articles/ArticleList';
import { FullArticleContainer } from '../../client/components/Articles/FullArticle';
//import CreateArticle from '../../client/components/Articles/CreateArticle';

describe('Articles', () => {
  describe('list component', () => {
    const functions = {
      handleToggle: () => {true},
    }
    const listComponent = shallow(<ArticleListItems articles={articles} handleToggle={functions.handleToggle}/>);

    it('should render the articles passed to it', () => {
      expect(listComponent.find('.article-list-item').length).toBe(10);
    });

    it('should display the content from the articles', () => {
      expect(listComponent.find('.article-list-title').isEmpty()).toBe(false);
    });

    it('should be in reverse order from the props', () => {
      expect(listComponent.find('.article-list-item').first().key()).toBe('10');
      expect(listComponent.find('.article-list-item').last().key()).toBe('1');
    });

    it('should handle toggle', () => {
      expect('')
    })

  });

  describe('full article modal', () => {
    const fullArticleModal = shallow(<FullArticleContainer article={{hidden:true}} />);
    it('should be hidden initially', () => {
      expect(fullArticleModal.hasClass('hidden')).toBe(true);
    });
  });
});

//etc...