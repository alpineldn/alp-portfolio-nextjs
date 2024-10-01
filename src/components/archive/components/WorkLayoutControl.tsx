import ListIcon from './icons/ListIcon';
import GridIcon from './icons/GridIcon';
import cn from '@/utils/cn';
import RoundedButton from './rounded-button';

interface ViewControlProps {
  viewMode: 'list' | 'grid';
  setViewMode: React.Dispatch<React.SetStateAction<'list' | 'grid'>>;
}

const WorkLayoutControl: React.FC<ViewControlProps> = ({
  viewMode,
  setViewMode,
}) => {
  const listViewActive = viewMode === 'list';
  const gridViewActive = viewMode === 'grid';

  return (
    <div className="flex justify-end gap-4 max-lg:hidden md:pr-[100px] 2xl:pr-[200px]">
      <RoundedButton
        backgroundColor={listViewActive ? '#fff' : '#f5f5f5'}
        onClick={() => setViewMode('list')}
        className={cn(
          'group relative flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[50%] group-hover:!text-dark',
          listViewActive ? '!bg-light text-dark' : 'text-light border',
        )}
      >
        <ListIcon className="relative z-10 transition-colors delay-150 group-hover:text-dark" />
      </RoundedButton>
      <RoundedButton
        onClick={() => setViewMode('grid')}
        backgroundColor={gridViewActive ? '#fff' : '#f5f5f5'}
        className={cn(
          'group relative flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[50%] border text-black group-hover:!text-dark',
          gridViewActive ? '!bg-light text-dark' : 'text-light border',
        )}
      >
        <GridIcon className="relative z-10 transition-colors delay-150 group-hover:text-dark" />
      </RoundedButton>
    </div>
  );
};
export default WorkLayoutControl;
