import {
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';

export interface BottomSheetHandler {
  dismiss: () => void;
  present: () => void;
}

export interface BottomSheetProps {
  snapPoints: string[];
  children: React.ReactNode;
  onDismiss?: () => void;
  onPresent?: () => void;
  backdrop?: (props: BottomSheetBackdropProps) => React.ReactNode;
}

export const BottomSheet = forwardRef<BottomSheetHandler, BottomSheetProps>(
  ({ snapPoints, children, onDismiss, onPresent, backdrop }, ref) => {
    const modalRef = useRef<BottomSheetModal>(null);

    useImperativeHandle(ref, () => ({
      dismiss: () => {
        modalRef.current?.dismiss();
        onDismiss?.();
      },
      present: () => {
        modalRef.current?.present();
        onPresent?.();
      },
    }));

    const defaultBackdrop = useCallback(
      (backdropProps: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop {...backdropProps} disappearsOnIndex={-1} />
      ),
      [],
    );

    return (
      <BottomSheetModal
        ref={modalRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={backdrop || defaultBackdrop}
      >
        {children}
      </BottomSheetModal>
    );
  },
);
