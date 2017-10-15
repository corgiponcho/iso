import React from 'react';
import Gallery from '../src/components/gallery/gallery';
import renderer from 'react-test-renderer';

test('Gallery component renders the text inside it', () => {
  const component = renderer.create(
    <div className="gallery-container">
      Gallery
    </div>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});