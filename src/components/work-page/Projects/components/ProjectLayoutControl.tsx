import RoundedButton from '@/components/common/ui/RoundedButton';
import ListIcon from './icons/ListIcon';
import GridIcon from './icons/GridIcon';
import cn from '@/utils/cn';

interface ViewControlProps {
  viewMode: 'list' | 'grid';
  setViewMode: React.Dispatch<React.SetStateAction<'list' | 'grid'>>;
}

const ProjectLayoutControl: React.FC<ViewControlProps> = ({
  viewMode,
  setViewMode,
}) => {
  const listViewActive = viewMode === 'list';
  const gridViewActive = viewMode === 'grid';

  return (
    <div className="flex justify-end gap-4 pr-[200px]">
      <RoundedButton
        backgroundColor={listViewActive ? '#1c1d20' : '#334BD3'}
        onClick={() => setViewMode('list')}
        className={cn(
          'group relative flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[50%] group-hover:!text-white',
          listViewActive ? '!bg-[#1c1d20] text-white' : 'border text-black',
        )}
      >
        <ListIcon className="relative z-10" />
      </RoundedButton>
      <RoundedButton
        onClick={() => setViewMode('grid')}
        backgroundColor={gridViewActive ? '#1c1d20' : '#334BD3'}
        className={cn(
          'relative flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[50%] border text-black group-hover:!text-white',
          gridViewActive ? '!bg-[#1c1d20] text-white' : 'border text-black',
        )}
      >
        <GridIcon className="relative z-10" />
      </RoundedButton>
    </div>
  );
};
export default ProjectLayoutControl;
