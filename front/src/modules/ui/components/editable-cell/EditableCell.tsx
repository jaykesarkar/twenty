import { ReactElement } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { isSomeInputInEditModeState } from '../../tables/states/isSomeInputInEditModeState';

import { EditableCellDisplayMode } from './EditableCellDisplayMode';
import { EditableCellEditMode } from './EditableCellEditMode';

export const CellBaseContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 32px;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
`;

type OwnProps = {
  editModeContent: ReactElement;
  nonEditModeContent: ReactElement;
  editModeHorizontalAlign?: 'left' | 'right';
  editModeVerticalPosition?: 'over' | 'below';
  isEditMode?: boolean;
  isCreateMode?: boolean;
  onOutsideClick?: () => void;
  onInsideClick?: () => void;
};

export function EditableCell({
  editModeContent,
  nonEditModeContent,
  editModeHorizontalAlign = 'left',
  editModeVerticalPosition = 'over',
  isEditMode = false,
  onOutsideClick,
  onInsideClick,
}: OwnProps) {
  const [isSomeInputInEditMode, setIsSomeInputInEditMode] = useRecoilState(
    isSomeInputInEditModeState,
  );

  function handleOnClick() {
    if (!isSomeInputInEditMode) {
      onInsideClick?.();
      setIsSomeInputInEditMode(true);
    }
  }

  return (
    <CellBaseContainer onClick={handleOnClick}>
      {isEditMode ? (
        <EditableCellEditMode
          editModeHorizontalAlign={editModeHorizontalAlign}
          editModeVerticalPosition={editModeVerticalPosition}
          isEditMode={isEditMode}
          onOutsideClick={onOutsideClick}
        >
          {editModeContent}
        </EditableCellEditMode>
      ) : (
        <EditableCellDisplayMode>{nonEditModeContent}</EditableCellDisplayMode>
      )}
    </CellBaseContainer>
  );
}