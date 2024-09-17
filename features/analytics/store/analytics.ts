import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type RootState } from '@/providers/store';

interface AnalyticsStore {
  installationId: string;
  customFirstOpen: boolean;
  onboardingComplete: boolean;
  reviewMode: boolean;
  purchaseButtonPress: boolean;
  runCount: number;
  mainFeatureUsed: boolean;
  purchaserMainFeatureUsed: boolean;
}

const initialState: AnalyticsStore = {
  installationId: '',
  customFirstOpen: true,
  onboardingComplete: false,
  reviewMode: false,
  purchaseButtonPress: false,
  runCount: 0,
  mainFeatureUsed: false,
  purchaserMainFeatureUsed: false,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setInstallationId(
      state,
      { payload }: PayloadAction<AnalyticsStore['installationId']>,
    ) {
      state.installationId = payload;
    },
    setCustomFirstOpen(
      state,
      { payload }: PayloadAction<AnalyticsStore['customFirstOpen']>,
    ) {
      state.customFirstOpen = payload;
    },
    setOnboardingComplete(
      state,
      { payload }: PayloadAction<AnalyticsStore['onboardingComplete']>,
    ) {
      state.onboardingComplete = payload;
    },
    setReviewMode(
      state,
      { payload }: PayloadAction<AnalyticsStore['reviewMode']>,
    ) {
      state.reviewMode = payload;
    },
    setPurchaseButtonPress(
      state,
      { payload }: PayloadAction<AnalyticsStore['purchaseButtonPress']>,
    ) {
      state.purchaseButtonPress = payload;
    },
    incrementRunCount: (state) => {
      state.runCount++;
    },
    setMainFeatureUsed(
      state,
      { payload }: PayloadAction<AnalyticsStore['mainFeatureUsed']>,
    ) {
      state.mainFeatureUsed = payload;
    },
    setPurchaserMainFeatureUsed(
      state,
      { payload }: PayloadAction<AnalyticsStore['purchaserMainFeatureUsed']>,
    ) {
      state.purchaserMainFeatureUsed = payload;
    },
  },
});

export const {
  setInstallationId,
  setCustomFirstOpen,
  setOnboardingComplete,
  setReviewMode,
  setPurchaseButtonPress,
  incrementRunCount,
  setMainFeatureUsed,
  setPurchaserMainFeatureUsed,
} = analyticsSlice.actions;
export const analyticsReducer = analyticsSlice.reducer;

export const selectInstallationId = (
  state: RootState,
): AnalyticsStore['installationId'] => state.analytics.installationId;

export const selectCustomFirstOpen = (
  state: RootState,
): AnalyticsStore['customFirstOpen'] => state.analytics.customFirstOpen;

export const selectOnboardingComplete = (
  state: RootState,
): AnalyticsStore['onboardingComplete'] => state.analytics.onboardingComplete;

export const selectReviewMode = (
  state: RootState,
): AnalyticsStore['reviewMode'] => state.analytics.reviewMode;

export const selectPurchaseButtonPress = (
  state: RootState,
): AnalyticsStore['purchaseButtonPress'] => state.analytics.purchaseButtonPress;

export const selectRunCount = (state: RootState): AnalyticsStore['runCount'] =>
  state.analytics.runCount;

export const selectMainFeatureUsed = (
  state: RootState,
): AnalyticsStore['mainFeatureUsed'] => state.analytics.mainFeatureUsed;

export const selectPurchaserMainFeatureUsed = (
  state: RootState,
): AnalyticsStore['purchaserMainFeatureUsed'] =>
  state.analytics.purchaserMainFeatureUsed;
