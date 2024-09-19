'use client';

import { TitleBar } from '@/client/features/navigation/components/title-bar';
import { SearchInput } from '@/client/components/base/fields/search-input';

export default function Tasks() {
  return (
    <>
      <TitleBar title='Tasks'>
        <SearchInput onSearch={(query) => console.log(query)} />
      </TitleBar>
    </>
  );
}
