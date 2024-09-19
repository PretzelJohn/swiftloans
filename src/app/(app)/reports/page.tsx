'use client';

import { TitleBar } from '@/client/features/navigation/components/title-bar';
import { SearchInput } from '@/client/components/base/fields/search-input';

export default function Reports() {
  return (
    <>
      <TitleBar title='Reports'>
        <SearchInput onSearch={(query) => console.log(query)} />
      </TitleBar>
    </>
  );
}
