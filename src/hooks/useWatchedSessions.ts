import { useState, useCallback } from 'react';

export function useWatchedSessions() {
  const [watchedSessions, setWatchedSessions] = useState<Set<number>>(new Set());

  const toggleWatched = useCallback((sessionId: number) => {
    setWatchedSessions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sessionId)) {
        newSet.delete(sessionId);
      } else {
        newSet.add(sessionId);
      }
      return newSet;
    });
  }, []);

  const isWatched = useCallback((sessionId: number) => {
    return watchedSessions.has(sessionId);
  }, [watchedSessions]);

  return {
    watchedSessions,
    toggleWatched,
    isWatched
  };
}