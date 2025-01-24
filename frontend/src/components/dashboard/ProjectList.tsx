import { useState } from 'react';
import { Button } from "@/components/ui/button"

interface Project {
  id: string;
  name: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <ul className="space-y-4">
      {projects.map((project) => (
        <li key={project.id} className="p-4 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between">
            <span className="font-semibold">{project.name}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            >
              {expandedProject === project.id ? 'Hide' : 'Details'}
            </Button>
          </div>
          {expandedProject === project.id && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              {/* Add more project details here */}
              <p>Project ID: {project.id}</p>
              {/* You can add more project-related information or actions here */}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;

