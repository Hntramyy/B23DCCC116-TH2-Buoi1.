import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ImageSearchComponent = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const images = useSelector((state) => state.imageSearchResults);

  const handleSearch = () => {
    if (query.trim()) {
      const fetchImages = async () => {
        const response = await fetch(`https://api.example.com/images?search=${query}`);
        const data = await response.json();
        dispatch({ type: 'SET_IMAGES', payload: data.results });
      };

      fetchImages();
      setQuery('');
    }
  };

  return (
    <div>
      <h2>Tìm kiếm hình ảnh</h2>
      <input
        type="text"
        placeholder="Nhập chủ đề..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
      <h3>Kết quả tìm kiếm:</h3>
      <ul className="image-results">
        {images.map((img, index) => (
          <li key={index}>
            <img src={img.url} alt={img.description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageSearchComponent;
