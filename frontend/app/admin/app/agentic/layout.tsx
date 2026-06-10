"use client"

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
} from "@kairo/shadcn-semi"
import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
	return (
		<SidebarProvider className="bg-surface p-2">
			<Sidebar>
				<SidebarHeader>header</SidebarHeader>
				<SidebarContent className="w-full p-2 text-white">
					{/*<div>新建任务</div>
					<div>搜索</div>
					<div>技能</div>*/}
					<SidebarGroup>
						<SidebarGroupLabel>新建任务</SidebarGroupLabel>
						<SidebarGroupAction>groupAction</SidebarGroupAction>
						<SidebarGroupContent>测试内容</SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>button1</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>button2</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>siderbar footer</SidebarFooter>
			</Sidebar>
			<SidebarInset className="bg-background border-separator overflow-hidden rounded-2xl border">
				{children}
			</SidebarInset>
		</SidebarProvider>
	)
}
