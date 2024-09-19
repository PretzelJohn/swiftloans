'use client';

import { TitleBar } from '@/client/features/navigation/components/title-bar';
import { SearchInput } from '@/client/components/base/fields/search-input';

export default function Applications() {
  return (
    <>
      <TitleBar title='Applications'>
        <SearchInput onSearch={(query) => console.log(query)} />
      </TitleBar>
    </>
  );
}
