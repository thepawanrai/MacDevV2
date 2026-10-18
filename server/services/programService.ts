import type { Program, SiteSettings } from '../../src/types/index.ts';
import { initialPrograms, initialSiteSettings } from '../../src/data/seedData.ts';

class ProgramService {
  private programs: Program[];
  private settings: SiteSettings;

  constructor() {
    this.programs = [...initialPrograms];
    this.settings = { ...initialSiteSettings };
  }

  public getAllPrograms(): Program[] {
    return this.programs;
  }

  public getProgramBySlug(slugOrId: string): Program | undefined {
    const normalized = slugOrId === 'sales-master' ? 'salesmaster' 
      : slugOrId === 'life-master' ? 'lifemaster'
      : slugOrId === 'goalmaster-archive' ? 'goalmaster'
      : slugOrId;

    return this.programs.find(
      p => p.slug === normalized || p.id === normalized || p.slug === slugOrId || p.id === slugOrId
    );
  }

  public getSettings(): SiteSettings {
    return this.settings;
  }
}

export const programService = new ProgramService();
