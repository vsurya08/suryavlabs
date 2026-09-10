# Plan: Strengthen project impact hierarchy

## Goal
Make the project outcome land faster than the problem statement in the Selected Work row, without changing the overall layout.

## Changes
1. In `src/routes/index.tsx`, locate the T&E Approvals Agent project card markup.
2. Swap the rendering order so the `outcome` appears above the `problem`.
3. Apply visual hierarchy:
   - Outcome: semibold, foreground color, leading-relaxed.
   - Problem: muted-foreground, regular weight, slightly smaller or same size but de-emphasized.
4. Keep the stats block and arrow unchanged.
5. Verify the preview shows the outcome as the dominant sentence in the row.

## Scope
Frontend only: one file edit (`src/routes/index.tsx`). No data model changes needed.
